import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import TransactionList from "../components/TransactionsList";
import AddTransaction from "../components/AddTransaction";
const Transactions = () => {
  const { transactions, role,setTransactions } = useContext(FinanceContext);

  const [filter, setFilter] = useState("all");
  const [ showModal,setShowModal] = useState(false);
  const [loading,setLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
const[editData,setEditData] = useState(null)
  const filteredData = transactions
  .filter((t) => {
    if (filter === "all") return true;
    return t.type === filter;
  })
  .filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );
  const sortedData = [...filteredData].sort((a, b) => {
  if (sort === "low") return a.amount - b.amount;
  if (sort === "high") return b.amount - a.amount;
  return 0;
});
const Skeleton = () => {
  return (
    <div className="animate-pulse space-y-2">
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
    </div>
  );
};
const handleDelete = (id) => {
  const updated = transactions.filter((t) => t.id !== id);
  setTransactions(updated);
}

  return (
    <div className="p-4">
      <div>
        
      </div>
      <h1 className="text-xl font-bold mb-4">Transactions</h1>
      <input
  type="text"
  placeholder="Search by category..."
  className="border p-2 mb-4 ml-2 rounded"
  onChange={(e) => setSearch(e.target.value)}
/>

      {/* ✅ ROLE BASED BUTTON */}
      {role === "admin" && (
        <button onClick={()=> setShowModal(true)} className="bg-blue-500 ml-4 r hover:bg-blue-600 transition text-white px-4 py-2 mb-4 rounded">
           + Add Transaction
        </button>
      )}

      {/* ✅ FILTER */}
      <select
        className="border p-2 mb-4 rounded ml-5"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* sorting */}
      <select onChange={(e) => setSort(e.target.value)} className="border ml-5 p-2 rounded">
    <option value="">Sort</option>
    <option value="low">Low to High</option>
    <option value="high">High to Low</option>
  </select>

      {/* ✅ TRANSACTION LIST */}
      {loading ? <Skeleton/> :<TransactionList data={sortedData} role={role} onDelete={handleDelete} onEdit={(t)=>{setEditData(t); setShowModal(true)}}   />}
      
      {showModal && (
<AddTransaction
  onClose={() => {
    setShowModal(false);
    setEditData(null);
  }}
  editData={editData}
/>      )}
    </div>
  );
};

export default Transactions;