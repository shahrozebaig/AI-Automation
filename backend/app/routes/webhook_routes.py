from fastapi import APIRouter
from fastapi import Request
router = APIRouter()
@router.post("/webhook/resend")
async def resend_webhook(
    request: Request
):
    payload = await request.json()
    print(
        "Incoming Email Webhook:"
    )
    print(payload)
    return {
        "success": True
    }