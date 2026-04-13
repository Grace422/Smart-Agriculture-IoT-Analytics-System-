import {
  LineChart, Line, XAxis, YAxis, Tooltip
} from "recharts";

function ChartComponent({ data }) {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="temperature_c" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="soil_moisture_pct" />
      <Line type="monotone" dataKey="humidity_pct" />
    </LineChart>
  );
}

export default ChartComponent;