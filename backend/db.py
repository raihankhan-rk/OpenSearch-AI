from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")

client = AsyncIOMotorClient(MONGO_URI)
db = client[DATABASE_NAME]

queries_collection = db["queries"]
responses_collection = db["responses"]

async def log_query_async(user: str, query: str, timestamp: str):
    document = {
        "user": user,
        "query": query,
        "timestamp": timestamp,
        "created_at": datetime.now()
    }
    await queries_collection.insert_one(document)

async def log_response_async(user: str, query: str, response: str, related_links: list, image_urls: list, timestamp: str):
    document = {
        "user": user,
        "query": query,
        "response": response,
        "related_links": related_links,
        "image_urls": image_urls,
        "timestamp": timestamp,
        "created_at": datetime.now()
    }
    await responses_collection.insert_one(document)