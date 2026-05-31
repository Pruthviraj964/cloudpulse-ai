def detect_anomaly(cpu, memory):
    if cpu > 90 or memory > 90:
        return {
            "risk": "CRITICAL",
            "recommendation": "Scale resources immediately"
        }

    if cpu > 75 or memory > 75:
        return {
            "risk": "WARNING",
            "recommendation": "Monitor infrastructure closely"
        }

    return {
        "risk": "NORMAL",
        "recommendation": "System operating normally"
    }