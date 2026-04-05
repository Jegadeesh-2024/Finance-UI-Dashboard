import React from "react";

const TransactionList = ({ data,role,onDelete,onEdit }) => {
  if (data.length === 0) {
    return <p className="text-gray-500 text-lg">No transactions found</p>;
    
  }

  return (
    <div className="mt-4">
      {data.map((t) => (
        <div
          key={t.id}
          className="flex justify-between bg-white dark:bg-gray-800 p-3 mb-2 rounded shadow p-3 mb-2 ">
          <p className="font-medium">{t.category}</p>
          <p className={t.type ==="income"? "text-green-500 font-semibold":"text-red-500 font-semibold"}>₹{t.amount}</p>
          <p className="text-sm text-gray-500 font-semibold">{t.date}</p>
           {role === "admin" && (
      <>
      <button
      onClick={() => onEdit(t)}
      className="text-blue-500 text-sm"
    >
      Edit
    </button>
        <button
          onClick={() => onDelete(t.id)}
          className="text-red-500 text-sm"
        >
          Delete
        </button>
      </>
    )}
        </div>
      ))}
    </div>
  );
};

export default TransactionList;