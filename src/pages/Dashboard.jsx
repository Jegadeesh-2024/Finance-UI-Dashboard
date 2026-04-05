import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import SummaryCard from "../components/SummaryCard";
import CustomLineChart from "../charts/LineChart";
import CustomPieChart from "../charts/PieChart";
import Insights from "../components/Insights";
import {  FaArrowUp, FaArrowDown } from "react-icons/fa";


const Dashboard = () => {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  // chart data:
  const chartData = transactions.map((t) => ({
  date: t.date,
  amount: t.amount,
}));
const categoryData = {};

transactions.forEach((t) => {
  if (t.type === "expense") {
    categoryData[t.category] =
      (categoryData[t.category] || 0) + t.amount;
  }
});

const pieData = Object.keys(categoryData).map((key) => ({
  name: key,
  value: categoryData[key],
}));

  return (
    <div className="p-4 md:p-6">
      <div className="grid md:grid-cols-3 gap-4 ">
        <SummaryCard title="Balance" amount={balance}  />
        <SummaryCard title="Income" amount={income} icon={<FaArrowUp/>} />
        <SummaryCard title="Expenses" amount={expense} icon={<FaArrowDown/>} />
        <CustomLineChart data={chartData}/>
        <CustomPieChart data={pieData}/>
        <Insights/>
      </div>
    </div>
  );
};

export default Dashboard;