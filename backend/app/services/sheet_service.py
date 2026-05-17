import gspread
from oauth2client.service_account import (
    ServiceAccountCredentials
)
from app.utils.helpers import (
    get_current_timestamp
)
scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/drive"
]
credentials = (
    ServiceAccountCredentials
    .from_json_keyfile_name(
        "app/credentials.json",
        scope
    )
)
client = gspread.authorize(
    credentials
)
def log_lead_to_sheet(
    name,
    email,
    company,
    status
):
    try:
        sheet = client.open(
            "AI Leads Tracker"
        ).sheet1
        sheet.append_row([
            name,
            email,
            company,
            status,
            get_current_timestamp()
        ])
        print(
            "Lead Added To Google Sheets"
        )
        return True
    except Exception as e:
        print(
            "Google Sheets Error:",
            str(e)
        )
        return False