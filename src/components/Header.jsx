import { Link } from "react-router-dom";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Header = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700">

      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

          {/* TITLE */}
          <h1 className="font-bold text-lg md:text-xl text-center md:text-left">
            Finance Dashboard
          </h1>

          {/* NAVIGATION */}
          <div className="flex justify-center md:justify-start gap-4 text-sm md:text-base">
            <Link className="hover:text-blue-500 transition" to="/">
              Dashboard
            </Link>
            <Link className="hover:text-blue-500 transition" to="/transactions">
              Transactions
            </Link>
          </div>

          {/* ROLE */}
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border p-2 rounded text-sm md:text-base dark:bg-gray-700 dark:text-white dark:border-gray-600"
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>

            <p className="text-sm text-gray-500 dark:text-gray-300">
              Role: <span className="font-semibold">{role}</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Header;