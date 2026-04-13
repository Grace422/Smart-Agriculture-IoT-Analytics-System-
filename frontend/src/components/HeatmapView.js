function HeatmapView({ data }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.slice(-20).map((point, index) => {
        const color = `rgba(0, 0, 255, ${point.soil_moisture_pct / 100})`;

        return (
          <div
            key={index}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: color,
              margin: "2px",
              borderRadius: "5px",
              transform: `scale(${1 + point.soil_moisture_pct / 200})`
            }}
          />
        );
      })}
    </div>
  );
}

export default HeatmapView;