"use client";

import { useTheme } from "../providers/theme-context";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

export default function Header() {
  const { theme, handleWitchTheme } = useTheme();

  return (
    <header className="py-6 px-8 shadow-md shadow-lightGrayBg dark:shadow-none dark:bg-darkBlue mb-6 md:mb-11">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <h1 className="text-lg mdtext-[27px] lg:text-2xl font-extrabold tracking-[2%] text-darkBlueText dark:text-lightGrayBg">
          Where in the world?
        </h1>
        <button
          onClick={() => handleWitchTheme()}
          className="text-base md:text-xl lg:text-[17px] tracking-[-2%] font-semibold flex items-center gap-x-2 text-darkBlueText dark:text-lightGrayBg"
        >
          {theme ? <IoMoonOutline /> : <IoMoon />}
          Dark Mode
        </button>
      </div>
    </header>
  );
}
