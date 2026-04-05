import { useEffect, useState } from 'react';

export function useDarkMode() {
  // Initialize from localStorage or system preference
 const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'light';
});

  useEffect(() => {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);

  // Create a simple toggle function
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return [theme, toggleTheme];
}