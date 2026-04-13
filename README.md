🌱 Smart Agriculture IoT Analytics System
📌 Overview

This project presents a Smart Agriculture IoT Analytics System that integrates real-time data simulation, machine learning, and interactive visualization to support intelligent farming decisions. The system monitors environmental conditions such as soil moisture, temperature, and humidity, and generates insights for irrigation and pest risk management.

🎯 Objectives
- Simulate IoT sensor data for agricultural monitoring
- Implement a real-time data pipeline
- Apply machine learning for irrigation prediction
- Visualize data using a web-based dashboard
- Generate alerts for irrigation and pest risk

🏗️ System Architecture
CSV Dataset → Data Streaming → Backend (Flask) → ML Model → React Dashboard

⚙️ Technologies Used
🔹 Backend
- Python
- Flask
- Pandas
- Joblib
🔹 Frontend
- React.js
- JavaScript
- Chart libraries
🔹 Machine Learning
Decision Tree Classifier (Scikit-learn)
🔹 Data Simulation
- CSV Dataset
- Python streaming script
📊 Features
📡 Real-time data simulation (every 3 seconds)
📈 Interactive charts for data trends
🌡️ Heatmap visualization for soil moisture
🤖 Machine learning-based irrigation prediction

🚨 Smart alerts:
- Irrigation Required / Optimal Condition
- Pest Risk (Low / Moderate / High)
🧠 Machine Learning Model
- Model: Decision Tree Classifier
- Input Features:
- Soil Moisture
- Temperature
- Humidity
- 
Output:
- Irrigation Requirement (Yes/No)


🚀 How to Run the Project
1️⃣ Clone Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Backend Setup
cd backend
pip install -r requirements.txt
python app.py
3️⃣ Run Data Streaming
python stream_csv.py
4️⃣ Frontend Setup
cd frontend
npm install
npm start

📡 API Endpoints
POST /ingest → Receive sensor data
GET /data → Fetch stored data
POST /predict → Get prediction and alerts

📈 Visualization
Line Charts → Show trends over time
Heatmap → Displays soil moisture intensity
Alerts Panel → Displays system recommendations
