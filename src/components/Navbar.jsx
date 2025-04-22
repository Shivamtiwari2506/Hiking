import React, { useState } from "react";
import icon from "../assets/icons/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between absolute z-50 w-full p-6 font-semibold">
        <div>
          <h1 className="text-3xl">
            <Link to="/">MNTN</Link>
          </h1>
        </div>

        {/* Hamburger icon for small screens */}

        {/* Normal nav for large screens */}
        <div className="lg:flex hidden">
          <ul className="flex items-center justify-between">
            <li className="mx-5 relative group">
              <Link
                to="/"
                className="text-white transition-all duration-300 ease-in-out group-hover:scale-105 inline-block"
              >
                Equipment
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FBD784] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="mx-5 relative group">
              <Link
                to="#"
                className="text-white transition-all duration-300 ease-in-out group-hover:scale-105 inline-block"
              >
                About us
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FBD784] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="mx-5 relative group">
              <Link
                to="#"
                className="text-white transition-all duration-300 ease-in-out group-hover:scale-105 inline-block"
              >
                Blog
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FBD784] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:flex items-center space-x-2 hidden relative group font-semibold">
          <img src={icon} alt="Cart" className="w-6 transition-all duration-300 ease-in-out group-hover:scale-105 inline-block" />
          <p className="transition-all duration-300 ease-in-out group-hover:scale-105 inline-block">
            <Link to="#">Account</Link>
          </p>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FBD784] transition-all duration-300 group-hover:w-full" />

        </div>

        <div className="lg:hidden flex items-center absolute right-4 top-4">
          <button onClick={toggleMenu}>
            <span className="text-4xl text-white">
              {isMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </nav>

      {/* Overlay and menu */}
      {isMenuOpen && (
        <>
          {/* Blur overlay */}
          <div
            onClick={closeMenu}
            className="fixed top-0 left-0 w-screen h-screen bg-blur bg-opacity-40 backdrop-blur-sm z-40"
          />

          <div
            className={`fixed top-0 right-0 w-2/3 h-screen bg-[#0B1D26] text-white p-6 space-y-4 transform transition-transform duration-500 ease-in-out z-50
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <ul className="flex flex-col items-start space-y-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#FBD784]"
                  onClick={closeMenu}
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[#FBD784]"
                  onClick={closeMenu}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[#FBD784]"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <p>
                  <Link
                    to="#"
                    className="hover:text-[#FBD784]"
                    onClick={closeMenu}
                  >
                    Account
                  </Link>
                </p>
                <img src={icon} alt="Cart" className="w-6" />
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
