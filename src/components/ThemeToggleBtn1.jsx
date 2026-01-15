import React, { useState, useEffect } from 'react';
import assets from '../assets/assets';


const ThemeToggleBtn1 = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 border border-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <img src={assets.sun_icon} alt="Light mode" className="size-7" />
      ) : (
        <img src={assets.moon_icon} alt="Dark mode" className="size-7" />  // ← YEH MOON HONA CHAHIYE
      )}
    </button>
  );
};

export default ThemeToggleBtn1;