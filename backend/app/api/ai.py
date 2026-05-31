from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.metrics import SystemMetric
from app.ml.anomaly_detector import detect_anomaly

router = APIRouter()


@router.get("/ai-analysis")
def ai_analysis(db: Session = Depends(get_db)):

    latest_metric = (
        db.query(SystemMetric)
        .order_by(SystemMetric.id.desc())
        .first()
    )

    if not latest_metric:
        return {
            "message": "No metrics available"
        }

    result = detect_anomaly(
        latest_metric.cpu_usage,
        latest_metric.memory_usage
    )

    return {
        "server": latest_metric.server_name,
        "cpu": latest_metric.cpu_usage,
        "memory": latest_metric.memory_usage,
        "risk": result["risk"],
        "recommendation": result["recommendation"]
    }