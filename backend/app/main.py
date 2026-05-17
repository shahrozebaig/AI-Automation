from fastapi import FastAPI
from fastapi.middleware.cors import (
    CORSMiddleware
)
from app.routes.lead_routes import (
    router as lead_router
)
from app.routes.health_routes import (
    router as health_router
)
from app.routes.webhook_routes import (
    router as webhook_router
)
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(
    lead_router
)
app.include_router(
    health_router
)
app.include_router(
    webhook_router
)
@app.get("/")
def root():
    return {
        "message":
        "AI Lead Automation Backend"
    }