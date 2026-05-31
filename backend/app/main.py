from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import threading

from app.core.config import settings
from app.core.database import engine, Base

from app.api.metrics import router as metrics_router
from app.api.ai import router as ai_router

from app.services.metric_generator import generate_fake_metrics

# Create database tables
Base.metadata.create_all(bind=engine)

# FastAPI App
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Enterprise Real-Time Analytics Platform"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routes
app.include_router(metrics_router)
app.include_router(ai_router)

# Start Background Metric Generator
metric_thread = threading.Thread(
    target=generate_fake_metrics,
    daemon=True
)

metric_thread.start()

# Root Endpoint
@app.get("/")
def root():
    return {
        "message": f"{settings.APP_NAME} Backend Running Successfully"
    }

# Health Check Endpoint
@app.get("/health")
def health():
    return {
        "status": "healthy",
        "database": "connected",
        "service": "CloudPulse AI"
    }