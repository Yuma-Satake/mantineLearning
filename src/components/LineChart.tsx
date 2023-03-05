import { Box } from "@mantine/core";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from "chart.js";
import { Line } from "react-chartjs-2";

const lineData = {
  labels: ["10歳", "20歳", "30歳", "10歳", "20歳", "30歳", "10歳", "20歳", "30歳"],
  datasets: [
    {
      label: "あなたの人生",
      data: [100, 200, 400, 800, 1600, 3200, 1200, 500, 200],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  return (
    <Box m={50}>
      <Line height={300} width={300} data={lineData} key='chart' />
    </Box>
  );
};
export default LineChart;
