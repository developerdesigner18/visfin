// React chart-js-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
// Chart Data
import { chartData } from "../data/chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Monthly Cash Flow & Loan Balance",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const lineOptions = {
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

const Chart = (props) => {
  const data = {
    labels: chartData.map((elm) => elm.month),
    datasets: [
      {
        label: "Land Acquisition Cost",
        data: chartData.map((elm) => elm.landAcquisitionCost),
        borderColor: "rgb(255, 99, 132)", // Line Chart
        backgroundColor: "#E7787A",
        yAxisID: "y", // Line Chart
      },
      {
        label: "Design Fees",
        data: chartData.map((elm) => elm.designFees),
        borderColor: "rgb(53, 162, 235)", // Line Chart
        backgroundColor: "#7AB472",
        yAxisID: "y1", // Line Chart
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

  return props.type === "bar" ? (
    <Bar className="my-3" options={barOptions} data={data} />
  ) : (
    <Line className="my-3" options={lineOptions} data={data} />
  );
};

export default Chart;
