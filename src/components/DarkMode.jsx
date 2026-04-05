import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const DarkMode = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:ring-2 ring-blue-400"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Sun className="text-yellow-500" size={24} />
      ) : (
        <Moon className="text-gray-700" size={24} />
      )}
    </button>
  );
};

export default DarkMode;