import React, { useContext, useState } from "react";
import ToggleDark from "./ChangeDark";
import { motion } from "framer-motion";
import { Theme } from "@/utils/Theme";
import Link from "next/link";
import FB from "@/public/fb.svg";
import X from "@/public/x.svg";
import LI from "@/public/li.svg";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { state, dispatch } = useContext(Theme);

  const openMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`${state?.darkMode?.dark ? "dark" : ""} scroll-smooth`}>
        <motion.div
          className="bg-slate-200 dark:bg-slate-900"
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
                    <span className="font-light text-slate-600 dark:text-slate-200 text-3xl lg:text-5xl">
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
                    className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                  >
                    Services
                  </Link>

                  <Link
                    href="/process"
                    className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                  >
                    Process
                  </Link>

                  <Link
                    href="/portfolio"
                    className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                  >
                    Portfolio
                  </Link>

                  <Link
                    href="/blog"
                    className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/about"
                    className="text-slate-600 dark:text-slate-200 hover:text-veryDarkViolet"
                  >
                    About us
                  </Link>

                  <Link
                    href="/contact"
                    className="px-8 py-3 font-bold text-slate-200 bg-cyan-600 rounded-full hover:opacity-70"
                  >
                    Contact
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
                <Link href="/services" className="w-full text-center">
                  Services
                </Link>
                <Link href="/process" className="w-full text-center">
                  Process
                </Link>
                <Link href="/portfolio" className="w-full text-center">
                  Portfolio
                </Link>
                <Link href="/blog" className="w-full text-center">
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="w-full pt-6 border-t border-gray-400 text-center"
                >
                  About us
                </Link>
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-full bg-cyan text-center"
                >
                  Contact
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
                      Let's keep in touch
                    </p>

                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                      <input
                        placeholder="Email"
                        className="rounded dark:bg-slate-600 bg-slate-300 p-2"
                      />

                      <div className="max-w-xs mx-auto text-center py-2 px-6 rounded-2xl border-2 border-cyan-600/50">
                        Join
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
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/process">Process</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/blog">Blog</Link>
              </div>
              <div className="flex flex-row items-center justify-center space-x-4 p-6 text-slate-600 dark:text-slate-400 font-normal">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
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
