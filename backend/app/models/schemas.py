from pydantic import BaseModel

class MetricCreate(BaseModel):
    server_name: str
    cpu_usage: float
    memory_usage: float