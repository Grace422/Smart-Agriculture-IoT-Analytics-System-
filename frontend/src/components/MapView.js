import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ data }) {
  const position = [12.9716, 77.5946]; // Example (Bangalore)

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((point, index) => (
        <Marker key={index} position={[
          position[0] + index * 0.001,
          position[1] + index * 0.001
        ]}>
          <Popup>
            🌱 Moisture: {point.soil_moisture_pct}% <br />
            🌡 Temp: {point.temperature_c}°C
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;