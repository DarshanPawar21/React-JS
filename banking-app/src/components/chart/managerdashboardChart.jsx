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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ManagerDashboardChart() {
  const { User_data = [] } = useSelector((state) => state.get_user_manager || {});
  const { Account_data = [] } = useSelector((state) => state.get_account_manager || {});
  const { Transaction_data = [] } = useSelector((state) => state.get_transaction_manager || {});
  const { Employee_data = [] } = useSelector((state) => state.get_employee_manager || {});

  const chartData = {
    labels: ["Customers", "Accounts", "Transactions", "Employees"],
    datasets: [
      {
        label: "Total Count",
        data: [
          User_data?.length || 0,
          Account_data?.length || 0,
          Transaction_data?.length || 0,
          Employee_data?.length || 0,
        ],
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
        borderColor: ["#2563EB", "#059669", "#D97706", "#DC2626"],
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Manager Dashboard Overview",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
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

export default ManagerDashboardChart;
