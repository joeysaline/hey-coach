import Container from "@mui/material/Container";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Current Week",
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Calories Consumed",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 3000 })),
      borderColor: "rgb(30, 99, 200)",
      backgroundColor: "rgb(30, 99, 250)",
    },
    {
      label: "Calories Burned",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function LineChart() {
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}
