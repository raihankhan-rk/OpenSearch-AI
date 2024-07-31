from fastapi import FastAPI, HTTPException, Depends, Header, BackgroundTasks
from pydantic import BaseModel
from typing import Dict
from datetime import datetime
import time
import asyncio
import pytz
import os
from concurrent.futures import ThreadPoolExecutor
from fastapi.middleware.cors import CORSMiddleware


import langchain
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.agents.format_scratchpad.openai_tools import (
    format_to_openai_tool_messages,
)
from langchain.agents.output_parsers.openai_tools import OpenAIToolsAgentOutputParser
from langchain.agents import AgentExecutor
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_community.tools import DuckDuckGoSearchResults, Tool
from dotenv import load_dotenv
from prompts import system_prompt

app = FastAPI()
load_dotenv()

origins = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Define the API Key
API_KEY = os.environ.get("API_KEY")

# Thread pool for CPU-bound tasks
thread_pool = ThreadPoolExecutor(max_workers=6)

# Dependency for API Key Authentication
async def verify_api_key(api_key: str = Header()):
    if api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid or missing API key")

class SearchRequest(BaseModel):
    query: str

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

@app.post("/api/search", dependencies=[Depends(verify_api_key)])
async def search(req: SearchRequest):
    query = req.query
    print("Query: ", query)
    try:
        now = time.time()
        result = await run_agent(query)
        response = {
            "status_code": 200,
            "query": query,
            "response": [result["output"]],
            "model": "gpt-4o",
            "timestamp": (datetime.now(pytz.timezone('Asia/Kolkata'))).isoformat(),
            "time_taken": time.time() - now
        }
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)