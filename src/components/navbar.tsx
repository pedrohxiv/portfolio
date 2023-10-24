"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  dict: {
    about: string;
    projects: string;
    contact: string;
  };
}

export const Navbar = ({ dict }: NavbarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {" "}
        </Link>
        <div className=" mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-[#121212] text-slate-200 hover:text-white focus:border-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-[#121212] text-slate-200 hover:text-white focus:border-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                {dict.about}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                {dict.projects}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                {dict.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center">
          <li>
            <Link
              href="#about"
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              {dict.about}
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              {dict.projects}
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              {dict.contact}
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};
