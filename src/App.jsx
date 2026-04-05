import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FinanceProvider } from "./context/FinanceContext";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Header from "./components/Header";
import DarkMode from "./components/DarkMode";

function App() {
  return (
     <FinanceProvider>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-white">
        <DarkMode/>
        
        
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>

        </BrowserRouter>

      </div>
    </FinanceProvider>
  );
}

export default App;