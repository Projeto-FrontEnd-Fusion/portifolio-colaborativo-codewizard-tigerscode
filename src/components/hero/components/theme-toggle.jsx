import { useState } from "react";
import { LuMoon, LuSunMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-black hover:text-gray-text dark:text-white-two"
    >
      {isDark ? <LuSunMoon size={24} /> : <LuMoon size={24} />}
    </button>
  );
};

export default ThemeToggle;
