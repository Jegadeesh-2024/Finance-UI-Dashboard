import { Link } from "react-router-dom";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Header = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 p-4 bg-gray-100 dark:bg-gray-800 dark:text-white">

      {/* TITLE */}
      <h1 className="font-bold text-lg md:text-xl text-center md:text-left">
        Finance Dashboard
      </h1>

      {/* NAVIGATION */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        <Link className="hover:text-blue-500" to="/">
          Dashboard
        </Link>
        <Link className="hover:text-blue-500" to="/transactions">
          Transactions
        </Link>
      </div>

      {/* ROLE SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded w-full md:w-auto dark:bg-gray-700 dark:text-white dark:border-gray-600"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        <p className="text-sm text-gray-500 dark:text-gray-300">
          Role: <span className="font-semibold">{role}</span>
        </p>
      </div>

    </div>
  );
};

export default Header;