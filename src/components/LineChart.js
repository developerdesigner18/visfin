// React chart-js-2
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
// Chart data
import { chartData } from "../data/chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const LineChart = () => {
  const data = {
    labels: chartData.map((elm) => elm.month),
    datasets: [
      {
        label: "Land Acquisition Cost",
        data: chartData.map((elm) => elm.landAcquisitionCost),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#E7787A",
        yAxisID: "y",
      },
      {
        label: "Design Fees",
        data: chartData.map((elm) => elm.designFees),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "#7AB472",
        yAxisID: "y1",
      },
      {
        label: "Project Contingency",
        data: chartData.map((elm) => elm.projectContingency),
        backgroundColor: "#DEEDDC",
      },
      {
        label: "Built Form",
        data: chartData.map((elm) => elm.builtForm),
        backgroundColor: "#F9DEDE",
      },
      {
        label: "Preliminary Works",
        data: chartData.map((elm) => elm.preliminaryWorks),
        backgroundColor: "#A2CECA",
      },
      {
        label: "Sales Costs",
        data: chartData.map((elm) => elm.saleCosts),
        backgroundColor: "#F0D46D",
      },
      {
        label: "Site Preparation",
        data: chartData.map((elm) => elm.sitePreparation),
        backgroundColor: "#91C5C1",
      },
      {
        label: "Taxes and Duties",
        data: chartData.map((elm) => elm.taxesAndDuties),
        backgroundColor: "#D3E8E7",
      },
      {
        label: "Infrastructuire Contributions",
        data: chartData.map((elm) => elm.infrastructureContributions),
        backgroundColor: "#C3DFDD",
      },
    ],
  };

  return <Line className="my-3" options={options} data={data} />;
};

export default LineChart;
