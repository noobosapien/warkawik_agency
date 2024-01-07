import React, { useContext, useState } from "react";
import ToggleDark from "./ChangeDark";
import { Theme } from "@/utils/Theme";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { state, dispatch } = useContext(Theme);

  const openMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${state?.darkMode?.dark ? "dark" : ""} `}>
      <div className="dark:bg-slate-900 dark:text-slate-200 min-h-screen">
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-20">
              <a href="#">
                <h1>
                  <span className="font-light text-slate-600 dark:text-slate-200 text-3xl lg:text-5xl">
                    Warka
                  </span>{" "}
                  <span className="font-thin text-slate-600 dark:text-slate-200 text-3xl lg:text-5xl">
                    wik
                  </span>
                </h1>
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-6 font-bold text-slate-600">
              <div className="hidden lg:flex space-x-8 font-bold items-center">
                <a
                  href="#"
                  className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                >
                  Services
                </a>

                <a
                  href="#"
                  className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                >
                  Process
                </a>

                <a
                  href="#"
                  className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                >
                  Portfolio
                </a>

                <a
                  href="#"
                  className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                >
                  Blog
                </a>

                <a
                  href="#"
                  className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                >
                  About us
                </a>

                <a
                  href="#"
                  className="px-8 py-3 font-bold text-slate-200 bg-cyan-600 rounded-full hover:opacity-70"
                >
                  Contact
                </a>

                <ToggleDark />
              </div>
            </div>

            <button
              onClick={openMenu}
              id="menu-btn"
              type="button"
              className={`block hamburger lg:hidden focus:outline-none ${
                menuOpen ? "open" : ""
              }`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          <div
            className={`absolute ${
              menuOpen ? "flex" : "hidden"
            } lg:hidden p-6 rounded-lg bg-cyan-600 left-6 right-6 top-20 z-100`}
          >
            <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-slate-200 rounded-sm">
              <a href="#" className="w-full text-center">
                Services
              </a>
              <a href="#" className="w-full text-center">
                Process
              </a>
              <a href="#" className="w-full text-center">
                Portfolio
              </a>
              <a href="#" className="w-full text-center">
                Blog
              </a>
              <a
                href="#"
                className="w-full pt-6 border-t border-gray-400 text-center"
              >
                About us
              </a>
              <a
                href="#"
                className="w-full py-3 rounded-full bg-cyan text-center"
              >
                Contact
              </a>
              <ToggleDark />
            </div>
          </div>
        </nav>

        {children}

        <footer></footer>
      </div>
    </div>
  );
}
