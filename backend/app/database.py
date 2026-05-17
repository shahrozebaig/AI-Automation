from pymongo import MongoClient
from app.config import DATABASE_URL, MONGO_DB_NAME
from datetime import datetime
client = MongoClient(DATABASE_URL)
db = client[MONGO_DB_NAME]
leads_collection = db.get_collection("leads")
def insert_lead(doc: dict):
    if "created_at" not in doc:
        doc["created_at"] = datetime.utcnow()
    result = leads_collection.insert_one(doc)
    return result.inserted_id
def find_lead(filter: dict):
    return leads_collection.find_one(filter)
def close_client():
    try:
        client.close()
    except Exception:
        pass