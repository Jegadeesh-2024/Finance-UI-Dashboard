import { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/FinanceContext";

const AddTransaction = ({ onClose,editData }) => {
  const { transactions, setTransactions } = useContext(FinanceContext);

 const [formData, setFormData] = useState({
  amount: "",
  category: "",
  type: "expense",
  date: "",
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (editData) {
    // ✅ UPDATE EXISTING TRANSACTION
    const updated = transactions.map((t) =>
      t.id === editData.id
        ? { ...t, ...formData, amount: Number(formData.amount) }
        : t
    );

    setTransactions(updated);
  } else {
    // ✅ ADD NEW TRANSACTION
    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
    };

    setTransactions([newTransaction, ...transactions]);
  }

  onClose();
};
useEffect(() => {
  if (editData) {
    setFormData(editData);
  }
}, [editData]);

  return (
<div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center px-2 overflow-y-auto">
  <div className="bg-white dark:bg-gray-800 dark:text-white p-4 md:p-6 rounded w-[90%] max-w-md transform transition-all scale-100">        
  <h2 className="text-lg font-bold mb-4 md:text-lg ">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            className="w-full border p-2.5 text-sm md:text-base border p-2 rounded dark:bg-gray-700 dark:text-white"
              value={formData.amount}

            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
              value={formData.category}

            className="w-full border p-2.5 text-sm md:text-base border p-2 rounded dark:bg-gray-700 dark:text-white"
            onChange={handleChange}
            required
          />

          <select
            name="type"
className="w-full border p-2.5 rounded dark:bg-gray-700 dark:text-white"            onChange={handleChange}
            value={formData.type}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            className="w-full border p-2.5 text-sm md:text-base border p-2 rounded dark:bg-gray-700 dark:text-white"
            onChange={handleChange}
            required
          />

          <div className="flex flex-col md:flex-row gap-2 md:justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {editData ?"Update":"Add"}
            </button>

            <button
              type="button"
              onClick={onClose}
className="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded"            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;