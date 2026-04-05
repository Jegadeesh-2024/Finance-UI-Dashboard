import { FaWallet } from "react-icons/fa";
const SummaryCard = ({ title, amount, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-xl p-4 transition transform hover:scale-105 hover:shadow-lg">
      {" "}
      {/* LEFT SIDE (TEXT) */}
      <div>
        <h2 className="text-gray-500 dark:text-gray-300">{title}</h2>
        <p className="text-2xl font-bold">₹ {amount}</p>
      </div>
      {/* ✅ ICON */}
      <div className="flex justify-between items-center" >
        <FaWallet className="text-blue-500 text-2xl " />
        {icon}
      </div>
    </div>
  );
};

export default SummaryCard;
