from dotenv import load_dotenv
import os
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
EMAIL_FROM = os.getenv("EMAIL_FROM")
DATABASE_URL = os.getenv("DATABASE_URL")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "ai_leads")