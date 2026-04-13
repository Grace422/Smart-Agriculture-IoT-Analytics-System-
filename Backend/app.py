from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

model = joblib.load("model.pkl")

sensor_data_store = []

@app.route("/ingest", methods=["POST"])
def ingest():
    raw_data = request.json

    # 🔹 Step 1: Process
    processed = process_data(raw_data)

    # 🔹 Step 2: Store
    sensor_data_store.append(processed)

    return {"status": "processed"}

@app.route("/data", methods=["GET"])
def get_data():
    return jsonify(sensor_data_store)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    # 🔹 Step 3: Convert for ML
    df = pd.DataFrame([data])
    df = df.reindex(columns=model.feature_names_in_, fill_value=0)

    prediction = model.predict(df)[0]

    # 🔹 Step 4: Alerts
    irrigation_alert = "⚠️ Irrigation Required" if prediction == 1 else "✅ Optimal"

    temperature = data.get("temperature", 0)
    humidity = data.get("humidity", 0)

    if temperature > 30 and humidity > 70:
        pest_alert = "🐛 High Pest Risk"
    elif temperature > 25 and humidity > 60:
        pest_alert = "⚠️ Moderate Pest Risk"
    else:
        pest_alert = "✅ Low Pest Risk"


    return jsonify({
        "irrigation_prediction": int(prediction),
        "irrigation_alert": irrigation_alert,
        "pest_alert": pest_alert
    })

def process_data(data):
    # Example: clean + enrich data
    data["temperature"] = float(data.get("temperature", 0))
    data["humidity"] = float(data.get("humidity", 0))
    data["moisture"] = float(data.get("moisture", 0))

    return data

if __name__ == "__main__":
    app.run(debug=True)