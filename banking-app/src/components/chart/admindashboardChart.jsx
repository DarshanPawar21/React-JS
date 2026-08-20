import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js ke required elements register karna zaroori hai
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardChart() {
  // Aapke RTK Store se exact same selectors
  const { userdata = [] } = useSelector((state) => state.getuser);
  const { accountdata = [] } = useSelector((state) => state.getaccount);
  const { transactiondata = [] } = useSelector((state) => state.gettransaction);
  const { getbranch = [] } = useSelector((state) => state.getbranch);
  const { Employee_data = [] } = useSelector((state) => state.get_employeedata);

  // Chart Data Configuration
  const chartData = {
    labels: [
      "Customers",
      "Accounts",
      "Transactions",
      "Branches",
      "Employees",
    ],
    datasets: [
      {
        label: "Total Count",
        data: [
          userdata?.length || 0,
          accountdata?.length || 0,
          transactiondata?.length || 0,
          getbranch?.length || 0,
          Employee_data?.length || 0,
        ],
        backgroundColor: [
          "#3B82F6", // Customers (Blue)
          "#10B981", // Accounts (Green)
          "#F59E0B", // Transactions (Yellow)
          "#8B5CF6", // Branches (Purple)
          "#EF4444", // Employees (Red)
        ],
        borderColor: [
          "#2563EB",
          "#059669",
          "#D97706",
          "#7C3AED",
          "#DC2626",
        ],
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Legend hidden kyunki 1 hi dataset hai
      },
      title: {
        display: true,
        text: "Dashboard Overview Column Chart",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0, // Numbers integer me dikhane ke liye
        },
      },
    },
  };

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default DashboardChart;