import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Insights = () => {
  const { transactions } = useContext(FinanceContext);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const highest = Math.max(...transactions.map((t) => t.amount));

  const categoryMap = {};

transactions.forEach((t) => {
  if (t.type === "expense") {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  }
});

const highestCategory = Object.keys(categoryMap).length
  ? Object.keys(categoryMap).reduce((a, b) =>
      categoryMap[a] > categoryMap[b] ? a : b
    )
  : "No Data";

  const monthlyData = {};

transactions.forEach((t) => {
  const month = t.date.slice(0, 7);

  monthlyData[month] =
    (monthlyData[month] || 0) +
    (t.type === "income" ? t.amount : -t.amount);
});

const months = Object.keys(monthlyData);

const lastMonth = months[months.length - 1];
const prevMonth = months[months.length - 2];

const comparison =
  lastMonth && prevMonth
    ? monthlyData[lastMonth] - monthlyData[prevMonth]
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
      <div className="bg-white dark:bg-gray-800 dark:text-white p-4 shadow rounded">
        <p className="text-gray-500 dark:text-gray-300">Total Income</p>
        <h2 className="text-xl font-bold">₹ {totalIncome}</h2>
      </div>

      <div className="bg-white dark:bg-gray-800 dark:text-white p-4 shadow rounded">
        <p className="text-gray-500 dark:text-gray-300">Total Expense</p>
        <h2 className="text-xl font-bold">₹ {totalExpense}</h2>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500">Highest Transaction</p>
        <h2 className="text-xl font-bold">₹ {highest}</h2>
      </div>
      {/* Highest Category */}
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 shadow rounded">
      <p className="text-gray-500 dark:text-gray-300">Highest Spending Category</p>
      <h2 className="text-xl font-bold">{highestCategory}</h2>
    </div>

    {/* Monthly Comparison */}
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 shadow rounded">
      <p className="text-gray-500 dark:text-gray-300">Monthly Change</p>
      <h2 className={`text-xl font-bold ${comparison >= 0 ? "text-green-500" : "text-red-500"}`}>
        ₹ {comparison}
      </h2>
    </div>

    {/* Savings */}
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 shadow rounded">
      <p className="text-gray-500 dark:text-gray-300">Net Savings</p>
      <h2 className={`text-xl font-bold ${(totalIncome - totalExpense) >= 0 ? "text-green-500" : "text-red-500"}`}>
        ₹ {totalIncome - totalExpense}
      </h2>
    </div>
    </div>
  );
};

export default Insights;

