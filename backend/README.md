# AI Lead Automation Backend

## 1. Install UV

Install UV package manager.

### Windows

```bash
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Verify installation:

```bash
uv --version
```

---

# 2. Initialize UV Project

Go to backend folder:

```bash
cd backend
```

Initialize project:

```bash
uv init
```

---

# 3. Install Dependencies

Install all required packages:

```bash
uv add fastapi
uv add uvicorn
uv add requests
uv add beautifulsoup4
uv add python-dotenv
uv add groq
uv add resend
uv add pydantic
uv add email-validator
uv add gspread
uv add oauth2client
uv add reportlab
```

---

# 4. Environment Setup

Create `.env` file inside backend folder.

Add:

```env
GROQ_API_KEY=your_groq_api_key
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=onboarding@resend.dev
DATABASE_URL=your-mongodb-connection-string
MONGO_DB_NAME=ai_leads
```

---

# 5. Get Groq API Key

Open:

[https://console.groq.com](https://console.groq.com)

Steps:

1. Login or create account
2. Open API Keys section
3. Click Create API Key
4. Copy generated key
5. Paste key inside `.env`

Example:

```env
GROQ_API_KEY=gsk_xxxxxxxxx
```

---

# 6. Get Resend API Key

Open:

[https://resend.com/api-keys](https://resend.com/api-keys)

Steps:

1. Login or create account
2. Click Create API Key
3. Copy generated key
4. Paste key inside `.env`

Example:

```env
RESEND_API_KEY=re_xxxxxxxxx
```

---

# 7. Google Sheets Setup

Open:

[https://console.cloud.google.com](https://console.cloud.google.com)

Steps:

1. Create new Google Cloud project
2. Enable Google Sheets API
3. Enable Google Drive API
4. Open Credentials
5. Create Service Account
6. Generate JSON Key
7. Download JSON file
8. Rename file to:

```txt
credentials.json
```

9. Move file into:

```txt
backend/app/
```

---

# 8. Create Google Sheet

Open Google Sheets.

Create new sheet named:

```txt
AI Leads Tracker
```

Add headers:

```txt
Name | Email | Company | Status
```

---

# 9. Share Google Sheet

Open `credentials.json`

Copy:

```txt
client_email
```

Open Google Sheet.

Click Share.

Paste copied email.

Give Editor access.

---

# 10. Run Backend

Start FastAPI server:

```bash
uv run uvicorn app.main:app --reload
```

---

# 11. Swagger API

Open:

```txt
http://127.0.0.1:8000/docs
```

---

# 12. Health Check API

Open:

```txt
http://127.0.0.1:8000/health
```

---

# 13. Test Main API

Endpoint:

```txt
POST /submit-lead
```

Example Request:

```json
{
  "name": "Alex",
  "email": "your_verified_email@gmail.com",
  "company": "Spotify",
  "website": "https://spotify.com"
}
```

---

# 14. Backend Workflow

```txt
Lead Submission
      ↓
Website Scraping
      ↓
Groq AI Analysis
      ↓
PDF Generation
      ↓
Google Sheets Logging
      ↓
Email Sending
```

---