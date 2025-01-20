import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from 'react-icons/bs';
import Button from './Button'

function ThemeSwitcher() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <Button onClick={toggleTheme} className="btn icon-btn" text={theme === 'light' ? <BsMoon /> : <BsSun />} />
    </div>
  );
}

export default ThemeSwitcher;
