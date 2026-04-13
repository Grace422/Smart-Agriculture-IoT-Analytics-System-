import pandas as pd
import time
import requests

data = pd.read_csv("smart_agriculture_dataset.csv")

for _, row in data.iterrows():
    payload = {
        "temperature_c": row["temperature_c"],
        "soil_moisture_pct": row["soil_moisture_pct"],
        "humidity_pct": row["humidity_pct"],
        "rainfall_mm": row["rainfall_mm"],
        "wind_speed_kmh": row["wind_speed_kmh"]
    }

    requests.post("http://127.0.0.1:5000/ingest", json=payload)

    print("Streaming:", payload)
    time.sleep(2)