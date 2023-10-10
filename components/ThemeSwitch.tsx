"use client";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
   const [theme, setTheme] = useState<Theme>("light");

   const toggleTheme = () => {
      if (theme === "light") {
         setTheme("dark");
         window.localStorage.setItem("theme", "dark");
      } else {
         setTheme("light");
         window.localStorage.setItem("theme", "light");
      }
   };

   useEffect(() => {
      const localTheme = window.localStorage.getItem("theme") as Theme | null;
      if (localTheme) {
         setTheme(localTheme);
      }
   }, []);
   return (
      <button className="theme-switch" onClick={toggleTheme}>
         {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
   );
};
export default ThemeSwitch;
