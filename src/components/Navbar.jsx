import React from "react";
import ShadowButton from "./ShadowButton";
import { HiMenu } from "react-icons/hi";
import { MdDownload } from "react-icons/md";

const Navbar = () => {
  return (
    <nav class="absolute w-full z-20 top-0 left-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://sunil-kumarr.github.io/" class="flex items-center">
          <span class="self-center text-lg md:text-xl lg:text-3xl  customFont font-semibold whitespace-nowrap dark:text-white">
            Sunil Kumar
          </span>
        </a>
        <div class="flex md:order-2">
          <ShadowButton
            content="Download Resume"
            link="https://drive.google.com/file/d/1SOQGtrn8qQZ8rkXXBzD4cPuprlt91mT4/view?usp=sharing"
          ></ShadowButton>
          {/* <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <HiMenu />
          </button> */}
        </div>
        <div
          class=" invisible items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium customFont border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Bloogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
