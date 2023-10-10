"use client";
import { usetheme } from "@/context/theme-context";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
   const { theme, toggleTheme } = usetheme();
   return (
      <button className="theme-switch" onClick={toggleTheme}>
         {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
   );
};
export default ThemeSwitch;
