from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.models.metrics import SystemMetric
from app.models.schemas import MetricCreate
from app.core.dependencies import get_db

router = APIRouter()

@router.post("/metrics")
def create_metric(
    metric: MetricCreate,
    db: Session = Depends(get_db)
):
    new_metric = SystemMetric(
        server_name=metric.server_name,
        cpu_usage=metric.cpu_usage,
        memory_usage=metric.memory_usage
    )

    db.add(new_metric)
    db.commit()
    db.refresh(new_metric)

    return {
        "message": "Metric created successfully",
        "data": {
            "id": new_metric.id,
            "server_name": new_metric.server_name,
            "cpu_usage": new_metric.cpu_usage,
            "memory_usage": new_metric.memory_usage
        }
    }

@router.get("/metrics")
def get_metrics(db: Session = Depends(get_db)):
    metrics = db.query(SystemMetric).all()

    return metrics