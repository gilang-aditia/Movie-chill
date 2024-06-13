import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/img/Profile.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute w-full p-4 flex justify-between items-center z-50 flex-wrap">
      <div className="flex items-center mb-2 md:mb-0">
        <Link to="/" className="mr-2 md:mr-8">
          <img
            src="https://i.ibb.co.com/x2PHnJM/Logo-chill.png"
            alt="logo"
            className="w-20 md:w-32 object-contain cursor-pointer"
          />
        </Link>
        <div className="flex flex-wrap">
          <Link to="/series" className="mr-2 md:mr-4 mb-2 md:mb-0">
            <button className="capitalize text-sm md:text-base px-2 md:px-4 py-1 md:py-2">
              Series
            </button>
          </Link>
          <Link to="/film" className="mr-2 md:mr-4 mb-2 md:mb-0">
            <button className="capitalize text-sm md:text-base px-2 md:px-4 py-1 md:py-2">
              Film
            </button>
          </Link>
          <Link to="/daftarsaya">
            <button className="capitalize text-sm md:text-base px-2 md:px-4 py-1 md:py-2">
              Daftar Saya
            </button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center">
          <div className="flex">
            <button
              className="relative flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full overflow-hidden focus:outline-none"
              onClick={toggleDropdown}>
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg overflow-hidden z-10">
            <div className="py-1">
              <Link to="/login">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 focus:outline-none">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 focus:outline-none">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
