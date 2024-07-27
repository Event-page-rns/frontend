import React, { useState } from "react";
import closeImg from "../assets/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import openImg from "../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import addImg from "../assets/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between  px-14 py-6 max-sm:px-4 border-b-2  border-black border-opacity-10">
      <h1 className="text-4xl font-bold font-mono">Eventus</h1>
      <div className="max-lg:hidden">
        <ul className="flex justify-center items-center gap-16 text-lg cursor-pointer">
          <li>
            <Link to="/">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
                Home
              </div>
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#Features">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
                Features
              </div>
            </HashLink>
          </li>
          <li>
            <Link to="/events">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
                Events
              </div>
            </Link>
          </li>
          <li>
            <Link to="/addevent">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
                Add event
              </div>
            </Link>
          </li>
          <li>
            <Link to="/chat">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
                Chat
              </div>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
                Login
              </div>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
                Sign up
              </div>
            </Link>
          </li>
          <li>
            <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
              Contact
            </div>
          </li>
        </ul>
      </div>
      <div className="hidden max-lg:block">
        <img
          src={openImg}
          className="filter grayscale brightness-0 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {isMenuOpen && (
        <div className="hidden max-lg:block fixed bg-slate-600  text-white pl-8 pr-16 py-10 top-0 right-[0] w-100 h-full  font-serif z-[999] transition duration-500 ease-in-out">
          <img
            src={closeImg}
            className="filter grayscale brightness-full absolute  cursor-pointer left-7 top-8"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="mt-20">
            <ul className="flex gap-6 flex-col text-2xl cursor-pointer justify-start items-start">
              <li className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300">
                <HashLink
                  smooth
                  to="/#Features"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </HashLink>
              </li>
              <li className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300">
                <Link to="/events" onClick={() => setIsMenuOpen(false)}>
                  Events
                </Link>
              </li>
              <li className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300">
                <Link to="/addevent" onClick={() => setIsMenuOpen(false)}>
                  Add Event
                </Link>
              </li>
              <li className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300">
                <Link to="/chat" onClick={() => setIsMenuOpen(false)}>
                  Chat
                </Link>
              </li>
              <li className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Signup
                </Link>
              </li>

              <li
                className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {" "}
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
