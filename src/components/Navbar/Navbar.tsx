// import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export interface INav {
  logo: string;
  home: string;
  projects: string;
  skills: string;
  contact: string;
}

const Navbar = (props: INav) => {
  // const [activeTheme, setTheme] = useThemeSwitcher();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <header className="w-full sticky top-0 z-30 px-4 bg-gray-100 sm:px-8">
      <div className="container flex flex-col items-center justify-between py-3 mx-auto md:flex-row">
        <a
          href="/"
          className="px-2 py-1 -mx-2 font-medium leading-tight rounded-md focus:bg-white focus:outline-none"
        >
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            {props.logo}
          </span>
          .
        </a>
        <nav className="flex flex-wrap items-center justify-center -mr-2 text-xs sm:text-sm sm:space-x-4 md:text-base">
          <a
            href="#home"
            className="px-2 py-1 rounded-md hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
          >
            {props.home}
          </a>
          <a
            href="#projects"
            className="px-2 py-1 rounded-md hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
          >
            {props.projects}
          </a>
          <a
            href="#skills"
            className="px-2 py-1 rounded-md hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
          >
            {props.skills}
          </a>
          <a
            href="#contact"
            className="px-2 py-1 rounded-md hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
          >
            {props.contact}
          </a>
          <div
            // onClick={() => setTheme(activeTheme)}
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            aria-label="Theme Switcher"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {theme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
