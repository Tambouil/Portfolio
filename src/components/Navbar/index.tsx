import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="w-full sticky top-0 z-30 px-4 shadow-lg bg-gray-100 sm:px-8 dark:bg-nav-navy dark:shadow-nav-navy text-lightest-navy dark:text-primary-light">
      <div className="container flex flex-col items-center justify-between py-3 mx-auto md:flex-row">
        <Link
          href="/"
          passHref={true}
          className="px-2 py-1 -mx-2 font-medium leading-tight rounded-md
          focus:bg-white focus:outline-none"
        >
          <a className="font-bold text-ternary-light">VB.</a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center -mr-2 text-xs sm:text-sm sm:space-x-4 md:text-base">
          <a
            href="#home"
            className="px-2 py-1 rounded-md hover:bg-gray-200  focus:bg-gray-300 focus:outline-none dark:hover:bg-lightest-navy"
          >
            Home
          </a>
          <a
            href="#projects"
            className="px-2 py-1 rounded-md hover:bg-gray-200 focus:bg-gray-300 focus:outline-none dark:hover:bg-lightest-navy"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="px-2 py-1 rounded-md hover:bg-gray-200 focus:bg-gray-300 focus:outline-none dark:hover:bg-lightest-navy"
          >
            About me
          </a>
          <a
            href="#contact"
            className="px-2 py-1 rounded-md hover:bg-gray-200 focus:bg-gray-300 focus:outline-none dark:hover:bg-lightest-navy"
          >
            Contact
          </a>
          <div
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            aria-label="Theme Switcher"
            className="ml-4 sm:ml-8 bg-primary-light dark:bg-lightest-navy p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {theme === "dark" ? (
              <FiMoon className="text-xl dark:text-lightest-slate dark:hover:text-ternary-light" />
            ) : (
              <FiSun className="text-xl text-light-navy hover:text-ternary-light" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
