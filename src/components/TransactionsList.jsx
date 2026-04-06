import React from "react";

const TransactionList = ({ data, role, onDelete, onEdit }) => {
  if (data.length === 0) {
    return (
      <p className="text-gray-500 text-lg text-center mt-6">
        No transactions found
      </p>
    );
  }

  return (
    <div className="mt-4">
      {data.map((t) => (
        <div
          key={t.id}
          className="bg-white dark:bg-gray-800 p-3 mb-2 rounded shadow flex flex-col md:flex-row md:justify-between md:items-center gap-2"
        >
          {/* LEFT SIDE */}
          <div className="flex justify-between md:block">
            <p className="font-medium">{t.category}</p>
            <p
              className={
                t.type === "income"
                  ? "text-green-500 font-semibold"
                  : "text-red-500 font-semibold"
              }
            >
              ₹{t.amount}
            </p>
          </div>

          {/* DATE */}
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {t.date}
          </p>

          {/* ACTIONS */}
          {role === "admin" && (
            <div className="flex gap-3 mt-2 md:mt-0">
              <button
                onClick={() => onEdit(t)}
                className="text-blue-500 text-sm hover:underline cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(t.id)}
                className="text-red-500 text-sm hover:underline cursor-pointer"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TransactionList;