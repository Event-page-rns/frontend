import React, { useState } from "react";
import closeImg from "../assets/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import openImg from "../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import addImg from "../assets/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { HashLink } from "react-router-hash-link";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DocumentContext } from "../Contexts/DocumentContext";
import { useContext } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isAuth,setIsAuth} = useContext(DocumentContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email")
    setIsAuth(false);
    isMenuOpen(false)
  }

  return (
    <header className="flex items-center justify-between  px-14 py-6 max-sm:px-4 border-b-2  border-black border-opacity-10">
      <h1 className="text-4xl font-bold font-mono cursor-pointer" onClick={()=>navigate("/")}>Eventus</h1>
      <div className="max-lg:hidden">
        <ul className="flex justify-center items-center gap-16 cursor-pointer text-xl">
          <li>
            <Link to="/">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400">
                Home
              </div>
            </Link>
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
          { isAuth &&
          <li>
            <Link to="/chat">
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400 ">
                Chat
              </div>
            </Link>
          </li>
        }
          { !isAuth ? 

          <div className="flex gap-x-4 flex-row">
          <li>
            <Link to="/login">
              <div className=" bg-red-500 px-6  text-lg  py-[10px] font-bold text-white">
                Login
              </div>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <div className="border-2 border-red-500 px-4 py-2 font-bold">
                Sign up
              </div>
            </Link>
          </li>
          </div> : <button className="bg-red-500 px-4 py-2 text-white" onClick={handleLogout}>Logout</button>
}
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
                <Link to="/events" onClick={() => setIsMenuOpen(false)}>
                  Events
                </Link>
              </li>
              <li className=" hover:translate-x-3 hover:translate-y-[-3px] duration-300">
                <Link to="/addevent" onClick={() => setIsMenuOpen(false)}>
                  Add Event
                </Link>
              </li>
              { isAuth &&
          <li>
            <Link to="/chat" onClick={() => setIsMenuOpen(false)}>
              <div className="cursor-pointer hover:border-b-2 hover:border-b-red-400 ">
                Chat
              </div>
            </Link>
          </li>
        }
              { !isAuth ? 
                <>
              <li className=" bg-red-500 px-6  py-2 text-white">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li className="border-2 border-red-500 px-4 py-2">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Signup
                </Link>
              </li>
              </> : <button className="bg-red-500 px-4 py-2 text-white" onClick={handleLogout}>Logout</button>
              }
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
