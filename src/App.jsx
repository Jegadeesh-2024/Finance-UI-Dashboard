import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FinanceProvider } from "./context/FinanceContext";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Header from "./components/Header";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <FinanceProvider>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
        
        {/* CONTAINER (Responsive) */}
        <div className="max-w-7xl mx-auto px-3 md:px-6">

          <BrowserRouter>

            {/* HEADER + DARK MODE */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 pt-3">
              
              <Header />

              {/* DARK MODE BUTTON */}
              <div className="flex justify-end md:justify-start">
                <DarkMode />
              </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="mt-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
              </Routes>
            </div>

          </BrowserRouter>

        </div>
      </div>
    </FinanceProvider>
  );
}

export default App;