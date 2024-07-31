from pymongo import MongoClient
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]

queries_collection = db["queries"]
responses_collection = db["responses"]

def log_query(user: str, query: str, timestamp: str):
    document = {
        "user": user,
        "query": query,
        "timestamp": timestamp,
        "created_at": datetime.now()
    }
    queries_collection.insert_one(document)

def log_response(user: str, query: str, response: str, related_links: list, image_urls: list, timestamp: str):
    document = {
        "user": user,
        "query": query,
        "response": response,
        "related_links": related_links,
        "image_urls": image_urls,
        "timestamp": timestamp,
        "created_at": datetime.now()
    }
    responses_collection.insert_one(document)
