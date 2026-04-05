import { Link } from "react-router-dom";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext"
const Header = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 dark:text-white">
      <h1 className="font-bold text-lg md:text-xl">Finance Dashboard</h1>

      {/* ✅ NAVIGATION */}
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/transactions">Transactions</Link>
      </div>

      {/* ✅ ROLE SWITCH */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-1 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
      <p className="text-sm text-gray-500">
  Role: <span className="font-semibold">{role}</span>
</p>
{/* <button
  onClick={() => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  }}
  className="border px-2 py-1 rounded"
>
  Toggle Dark
</button> */}
      
    </div>
  );
};

export default Header;