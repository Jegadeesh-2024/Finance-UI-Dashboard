import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkMode = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className="p-2.5 md:p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition-all duration-300 hover:ring-2 ring-blue-400"
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? (
          <Sun className="text-yellow-500 w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Moon className="text-gray-700 w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;