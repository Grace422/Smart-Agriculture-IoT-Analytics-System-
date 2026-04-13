import { useEffect, useState } from "react";
import ChartComponent from "./components/ChartComponent";
import MapView from "./components/MapView";
import HeatmapView from "./components/HeatmapView";


function Dashboard() {
    const [prediction, setPrediction] = useState(null);
    const [data, setData] = useState([]);
    const navBtn = {
        padding: "10px",
        marginBottom: "10px",
        border: "none",
        borderRadius: "6px",
        background: "#334155",
        color: "white",
        cursor: "pointer",
        textAlign: "left"
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://127.0.0.1:5000/data")
                .then(res => res.json())
                .then(data => {
                    setData(data);

                    if (data.length > 0) {
                        fetch("http://127.0.0.1:5000/predict", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(data[data.length - 1])
                        })
                            .then(res => res.json())
                            .then(pred => setPrediction(pred));

                    }
                });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <div style={{
                width: "250px",
                background: "#1e293b",
                color: "white",
                padding: "20px",
                display: "flex",
                flexDirection: "column"
            }}>

                <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
                    AgriSense AI
                </h2>

                <button style={navBtn}>📊 Dashboard</button>
                <button style={navBtn}>🛰 Sensors</button>
                <button style={navBtn}>🚨 Alerts</button>

            </div>
            <div style={{ padding: "20px", flex: 1, background: "#f5f7fa" }}>
                <h1 style={{ fontWeight: "bold", color: "#1e293b" }}>Dashboard</h1>

                {/* ALERT CARD */}
                <div style={{
                    background: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}>
                    <h2 style={{ fontWeight: "bold" }}>Prediction</h2>
                    {prediction && (
                        <>
                            <h2 style={{ fontWeight: "400", fontSize: "14" }}>{prediction.irrigation_alert}</h2>
                            <h2 style={{ fontWeight: "400", fontSize: "14" }}>{prediction.pest_alert}</h2>
                        </>
                    )}
                </div>

                {/* CHART CARD */}
                <div style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}>
                    <h2>Soil Data Trends</h2>
                    <ChartComponent data={data} />
                </div>

                {/* MAP CARD */}
                <div style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}>
                    <h2>Farm Map View</h2>
                    <MapView data={data} />
                </div>

                {/* HEATMAP CARD */}
                <div style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                }}>
                    <h2>3D Soil Moisture Heatmap</h2>
                    <HeatmapView data={data} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;