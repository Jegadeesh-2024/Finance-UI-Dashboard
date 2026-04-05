import { createContext, useState } from "react";
import { transactions as mockData } from "../data/mockData";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  // ✅ CORRECT PLACE (inside component)
  const [transactions, setTransactions] = useState(mockData || storedData);
  const [role, setRole] = useState("viewer");
  
  const storedData = JSON.parse(localStorage.getItem("transactions"));


  return (
    <FinanceContext.Provider
      value={{ transactions, setTransactions, role, setRole }}
    >
      {children}
    </FinanceContext.Provider>
  );
};