import random
import time

from app.core.database import SessionLocal
from app.models.metrics import SystemMetric


def generate_fake_metrics():
    db = SessionLocal()

    server_names = [
        "server-1",
        "server-2",
        "server-3",
        "server-4"
    ]

    while True:
        metric = SystemMetric(
            server_name=random.choice(server_names),
            cpu_usage=round(random.uniform(10, 100), 2),
            memory_usage=round(random.uniform(20, 95), 2)
        )

        db.add(metric)
        db.commit()

        print(
            f"Generated metric → "
            f"{metric.server_name} | "
            f"CPU: {metric.cpu_usage}% | "
            f"Memory: {metric.memory_usage}%"
        )

        time.sleep(5)