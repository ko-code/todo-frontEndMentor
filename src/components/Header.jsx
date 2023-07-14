import React, { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDark = localStorage.getItem('theme') === 'dark';


const Header = () => {
  const [darkMode, setDark] = useState(initialStateDark);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-xl font-bold tracking-[0.3em]">
          Todo
        </h1>
        <button onClick={() => setDark(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon fill={"#FFF"} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
