import { FaWallet } from "react-icons/fa";

const SummaryCard = ({ title, amount, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-xl p-3 md:p-4 transition transform hover:scale-105 hover:shadow-lg">

      <div className="flex justify-between items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
            {title}
          </h2>
          <p className="text-lg md:text-2xl font-bold">
            ₹ {amount}
          </p>
        </div>

        {/* ICON */}
        <div className="text-blue-500 text-xl md:text-2xl">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default SummaryCard;