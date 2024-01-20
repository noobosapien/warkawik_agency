import React, { useContext, useState } from "react";
import ToggleDark from "./ChangeDark";
import { motion } from "framer-motion";
import { Theme } from "@/utils/Theme";
import Link from "next/link";
import FB from "@/public/fb.svg";
import X from "@/public/x.svg";
import LI from "@/public/li.svg";

export default function Layout({ active, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { state, dispatch } = useContext(Theme);

  const openMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`${state?.darkMode?.dark ? "dark" : ""} scroll-smooth`}>
        <motion.div
          className="bg-slate-200 dark:bg-slate-800"
          style={{
            position: "fixed",
            width: "100vw",
            zIndex: 1000,
            bottom: 0,
            fontSize: "10rem",
          }}
          transition={{
            ease: "easeIn",
            duration: 1.5,
          }}
          initial={{ height: "0vh" }}
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
        ></motion.div>

        <div className="dark:bg-slate-900 text-slate-600 dark:text-slate-200 min-h-screen">
          <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-20">
                <Link href="/">
                  <h1>
                    <span className="font-bold text-slate-600 dark:text-slate-200 text-3xl lg:text-5xl">
                      Warka
                    </span>{" "}
                    <span className="font-thin text-slate-600 dark:text-slate-200 text-3xl lg:text-5xl">
                      wik
                    </span>
                  </h1>
                </Link>
              </div>

              <div className="hidden lg:flex items-center space-x-6 font-bold text-slate-600">
                <div className="hidden lg:flex space-x-8 font-bold items-center">
                  <Link
                    href="/services"
                    className={`text-slate-600 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600 rounded ${
                      active == "services" ? "border-cyan-600 border-b-4" : ""
                    }`}
                  >
                    Services
                  </Link>

                  <Link
                    href="/process"
                    className={`text-slate-600 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600 rounded ${
                      active == "process" ? "border-cyan-600 border-b-4" : ""
                    }`}
                  >
                    Process
                  </Link>

                  <Link
                    href="/portfolio"
                    className={`text-slate-600 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600 rounded ${
                      active == "portfolio" ? "border-cyan-600 border-b-4" : ""
                    }`}
                  >
                    Portfolio
                  </Link>

                  <Link
                    href="/technology"
                    className={`text-slate-600 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600 rounded ${
                      active == "technology" ? "border-cyan-600 border-b-4" : ""
                    }`}
                  >
                    Technology
                  </Link>

                  <Link
                    href="/blog"
                    className={`text-slate-600 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600 rounded ${
                      active == "blog" ? "border-cyan-600 border-b-4" : ""
                    }`}
                  >
                    Blog
                  </Link>

                  <Link
                    href="/contact"
                    className={`p-4 text-slate-100 hover:text-slate-300 rounded-full ${
                      active == "contact"
                        ? "bg-slate-600 hover:bg-slate-800"
                        : "bg-cyan-600 hover:bg-cyan-900"
                    }`}
                  >
                    Request a call
                  </Link>

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
              } lg:hidden p-6 rounded-lg bg-cyan-600 left-6 right-6 top-20 z-10`}
            >
              <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-slate-200 rounded-sm">
                <Link
                  href="/services"
                  className={`w-full text-center ${
                    active == "services" ? "text-slate-600" : ""
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/process"
                  className={`w-full text-center ${
                    active == "process" ? "text-slate-600" : ""
                  }`}
                >
                  Process
                </Link>
                <Link
                  href="/portfolio"
                  className={`w-full text-center ${
                    active == "portfolio" ? "text-slate-600" : ""
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  href="/technology"
                  className={`w-full text-center ${
                    active == "technology" ? "text-slate-600" : ""
                  }`}
                >
                  Technology
                </Link>
                <Link
                  href="/blog"
                  className={`w-full text-center ${
                    active == "blog" ? "text-slate-600" : ""
                  }`}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className={`w-full py-3 pt-6 border-t border-slate-400 bg-cyan text-center ${
                    active == "contact" ? "text-slate-600" : ""
                  }`}
                >
                  Request a call
                </Link>
                <ToggleDark />
              </div>
            </div>
          </nav>

          {children}

          <footer className="min-h-48 ">
            <div className="relative flex flex-col dark:bg-slate-700 bg-slate-200">
              <div className="flex flex-col lg:flex-row items-center justify-evenly lg:space-x-10 space-y-8 p-6">
                <div className="flex flex-col">
                  <p className="text-center text-slate-400">
                    Feel free to ask us a question
                  </p>
                  <p className="text-center">hi@warkawik.co.nz</p>
                </div>

                <div className="flex flex-col items-center justify-evenly space-y-10">
                  <div className="flex flex-col space-y-6">
                    <p className="text-center text-slate-400">
                      Download your free PDF on how to ...
                    </p>

                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                      <input
                        placeholder="Email"
                        className="rounded dark:bg-slate-600 bg-slate-300 p-2"
                      />

                      <div className="max-w-xs mx-auto text-center py-2 px-6 rounded-2xl border-2 border-cyan-600/50">
                        Download
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-evenly space-x-7">
                    <a
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-600"
                      href="#"
                    >
                      <img src={FB.src} className="w-6" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-600"
                    >
                      <img src={X.src} className="w-4" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-600"
                    >
                      <img src={LI.src} className="w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center space-x-4 p-2 text-slate-600 dark:text-slate-400 font-normal">
                <Link
                  href="/"
                  className={`${
                    active == "home" ? "text-slate-900 dark:text-slate-100" : ""
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/services"
                  className={`${
                    active == "services"
                      ? "text-slate-900 dark:text-slate-100"
                      : ""
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/process"
                  className={`${
                    active == "process"
                      ? "text-slate-900 dark:text-slate-100"
                      : ""
                  }`}
                >
                  Process
                </Link>
                <Link
                  href="/portfolio"
                  className={`${
                    active == "portfolio"
                      ? "text-slate-900 dark:text-slate-100"
                      : ""
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  href="/technology"
                  className={`${
                    active == "technology"
                      ? "text-slate-900 dark:text-slate-100"
                      : ""
                  }`}
                >
                  Technology
                </Link>
                <Link
                  href="/blog"
                  className={`${
                    active == "blog" ? "text-slate-900 dark:text-slate-100" : ""
                  }`}
                >
                  Blog
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center space-x-4 p-6 text-slate-600 dark:text-slate-400 font-normal">
                <Link
                  href="/about"
                  className={`${
                    active == "about"
                      ? "text-slate-900 dark:text-slate-100"
                      : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`${
                    active == "contact"
                      ? "text-slate-900 dark:text-slate-100"
                      : ""
                  }`}
                >
                  Contact
                </Link>
                <Link
                  href="/privacy"
                  className={`${
                    active == "privacy"
                      ? "text-slate-900 dark:text-slate-100"
                      : ""
                  }`}
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className={`${
                    active == "terms"
                      ? "text-slate-900 dark:text-slate-100"
                      : ""
                  }`}
                >
                  Terms
                </Link>
              </div>

              <div className="dark:bg-slate-600 bg-slate-300 flex flex-col items-center justify-center min-h-24 text-slate-400">
                <p className="text-center">
                  Let us make your web dream become a reality.
                </p>
                <p className="font-light">Warkawik | All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
    // </motion.div>
  );
}
