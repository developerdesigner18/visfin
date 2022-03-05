// Bootstrap
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// Chart Data
import { chartData } from "../data/chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
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

const BarChart = () => {
  const data = {
    labels: chartData.map((elm) => elm.month),
    datasets: [
      {
        label: "Land Acquisition Cost",
        data: chartData.map((elm) => elm.landAcquisitionCost),
        backgroundColor: "#E7787A",
      },
      {
        label: "Design Fees",
        data: chartData.map((elm) => elm.designFees),
        backgroundColor: "#7AB472",
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

  return <Bar className="my-3" options={options} data={data} />;
};

export default BarChart;
