import { SelectYearContext } from "@/pages";
import { Box } from "@mantine/core";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement
} from "chart.js";
import { useContext } from "react";

import { Doughnut, Line } from "react-chartjs-2";

const CurcleData = {
  labels: ["収入", "支出", "貯蓄比率"],
  datasets: [
    {
      label: "支出と収入の割合",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)"
      ],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
      borderWidth: 1
    }
  ]
};

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart"
    }
  }
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

const LineChart = () => {
  const { state: SelectYear, setState: setSelectYear } = useContext(SelectYearContext);

  const lineData = {
    labels: [
      "0年後",
      "10年後",
      "20年後",
      "30年後",
      "40年後",
      "50年後",
      "60年後",
      "70年後",
      "80年後",
      "90年後",
      "100年後"
    ],
    datasets: [
      {
        label: "人生シミレーション",
        data: [100, 200, 400, 800, 1000, 1300, 1300, 1200, 900, 800, 800].slice(
          0,
          SelectYear / 10 + 1
        ),
        borderColor: "#E64980",
        backgroundColor: "#E64980"
      }
    ]
  };
  return (
    <Box m={100} sx={{ width: "500px" }}>
      <Line height={100} width={100} data={lineData} options={options} key='chart' />
      <Doughnut height={300} width={300} data={CurcleData} options={options} key='chart' />
    </Box>
  );
};
export default LineChart;
