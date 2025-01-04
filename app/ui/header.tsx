"use client";

import { useTheme } from "../providers/theme-context";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

export default function Header() {
  const { theme, handleWitchTheme } = useTheme();

  return (
    <header className="text-[17px] md:text-[27px] lg:text-2xl py-8 px-8 md:py-6 md:px-8 theme-shadow theme-bg mb-8 md:mb-11">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <h1 className="font-extrabold tracking-[2%]">Where in the world?</h1>
        <button
          onClick={() => handleWitchTheme()}
          className="text-[15px] md:text-xl lg:text-[17px] tracking-[-2%] font-semibold flex items-center gap-x-2"
        >
          {theme ? <IoMoonOutline /> : <IoMoon />}
          Dark Mode
        </button>
      </div>
    </header>
  );
}
