from fastapi import FastAPI, HTTPException, Depends, Header, BackgroundTasks
from pydantic import BaseModel
from typing import List
from datetime import datetime
import time
import asyncio
import pytz
import json
import os
from fastapi.middleware.cors import CORSMiddleware

from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.agents.format_scratchpad.openai_tools import format_to_openai_tool_messages
from langchain.agents.output_parsers.openai_tools import OpenAIToolsAgentOutputParser
from langchain.agents import AgentExecutor
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_community.tools import DuckDuckGoSearchResults
from dotenv import load_dotenv
from prompts import system_prompt
from image_search import get_image_urls_async
from db import log_query_async, log_response_async

app = FastAPI()
load_dotenv()

origins = [
    "https://opensearchai.live",
    "https://opensearchai.live/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Define the API Key
API_KEY = os.environ.get("API_KEY")

# Dependency for API Key Authentication


async def verify_api_key(api_key: str = Header()):
    if api_key != API_KEY:
        raise HTTPException(
            status_code=401, detail="Invalid or missing API key")


class SearchRequest(BaseModel):
    query: str
    user: str  # Add user field


class RelatedLink(BaseModel):
    url: str
    title: str
    snippet: str


class SearchResponse(BaseModel):
    status_code: int
    query: str
    response: str
    related_links: List[RelatedLink]
    image_urls: List[str]
    model: str
    timestamp: str
    time_taken: float


llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)
search = TavilySearchResults()
# search = DuckDuckGoSearchResults()

tools = [search]

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            system_prompt,
        ),
        ("user", "{input}"),
        MessagesPlaceholder(variable_name="agent_scratchpad"),
    ]
)

llm_with_tools = llm.bind_tools(tools)

agent = (
    {
        "input": lambda x: x["input"],
        "agent_scratchpad": lambda x: format_to_openai_tool_messages(
            x["intermediate_steps"]
        ),
    }
    | prompt
    | llm_with_tools
    | OpenAIToolsAgentOutputParser()
)

agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)


@app.get("/ping")
async def ping():
    return {"message": "Pong"}


@app.get("/health")
async def health_check():
    return {"status": "OK"}


async def run_agent(query: str):
    return await agent_executor.ainvoke({"input": query})


@app.post("/api/search", dependencies=[Depends(verify_api_key)], response_model=SearchResponse)
async def search(req: SearchRequest, background_tasks: BackgroundTasks):
    query = req.query
    user = req.user
    print(f"Query: {query}")
    try:
        # Run agent and get image URLs concurrently
        agent_task = asyncio.create_task(run_agent(query))
        image_urls_task = asyncio.create_task(get_image_urls_async(query))

        now = time.time()
        result, image_urls = await asyncio.gather(agent_task, image_urls_task)

        result_json = json.loads(result["output"].replace('\n', ''))

        response_text = result_json.get("response", "")
        related_links = [
            RelatedLink(
                url=link.get("url", ""),
                title=link.get("title", ""),
                snippet=link.get("snippet", "")
            )
            for link in result_json.get("related_links", [])
        ]

        timestamp = (datetime.now(pytz.timezone('Asia/Kolkata'))).isoformat()

        response = SearchResponse(
            status_code=200,
            query=query,
            response=response_text,
            related_links=related_links,
            image_urls=image_urls[1:],
            model="gpt-4o-mini",
            timestamp=timestamp,
            time_taken=time.time() - now
        )
        print(f"Response: {response}")

        # Log query and response asynchronously
        background_tasks.add_task(log_query_async, user, query, timestamp)
        background_tasks.add_task(log_response_async, user, query, response_text, [
                                  link.dict() for link in related_links], image_urls[1:], timestamp)

        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
