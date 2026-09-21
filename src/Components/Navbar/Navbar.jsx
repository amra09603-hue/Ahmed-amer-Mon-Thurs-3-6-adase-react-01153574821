import React from "react";
import LogoImage from "../../assets/logoo.png";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";


export default function Navbar() {
  return (
    <>
      <nav className="bg-[#060606fb] ml-7 fixed w-full z-50 top-0 start-0 border-b border-gray-600/50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3  px-6 ">
          <div className="flex items-center cursor-pointer gap-2.5 rtl:space-x-reverse">
            <img src={LogoImage} className="h-12 mt-1 hover:scale-105 transition-all duration-300" alt="Adase Logo" />
            <div className="self-center text-heading  whitespace-nowrap">
              <h1 className="text-white text-xl font-semibold">عدسة</h1>
              <p className="text-xs text-orange-400 opacity-80">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </div>
          <div className="flex items-center gap-7 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div>
              <IoSearch className="text-gray-600 font-medium text-xl" />
            </div>
            <button
              type="button"
              className="text-white bg-orange-500 transition-transform hover:-translate-y-0.5 duration-300 box-border cursor-pointer  shadow-xs font-semibold leading-5  px-7 py-4 rounded-full "
            >
              <Link to="blog">ابدا القراءة</Link>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center ml-3 text-white text-lg text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between p-1 px-2 hidden w-full border border-stone-800 rounded-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col justify-center  md:p-0 mt-4 font-medium  rounded-base  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li className="m-0">
                <NavLink
                  to=""
                  className="block py-2.5 px-5 text-gray-400 hover:text-white text-sm  rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand  md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className="m-0">
                <NavLink
                  to="blog"
                  className="block py-2.5 px-5 text-gray-400 hover:text-white text-sm  rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand  md:dark:hover:bg-transparent"
                >
                  المدونة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="block py-2.5 px-5 text-gray-400 hover:text-white text-sm  rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand  md:dark:hover:bg-transparent"
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
