import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-full p-4 flex justify-between items-center z-50 flex-wrap">
      <div className="flex items-center mb-2 md:mb-0">
        {" "}
        {/* Bagian kiri */}
        <Link to="/" className="mr-2 md:mr-8">
          {/* masukan gambar */}
          <img
            src="https://i.ibb.co.com/x2PHnJM/Logo-chill.png"
            alt="logo"
            className="w-20 md:w-32 object-contain cursor-pointer"
          />
        </Link>
        <div className="flex flex-wrap">
          {" "}
          {/* Menu navigasi */}
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

      <div className="flex items-center">
        {" "}
        {/* Bagian kanan */}
        <div className="flex">
          {" "}
          {/* Tombol Login dan Sign Up */}
          <Link to="/login">
            <button className="capitalize text-sm md:text-base pr-2 md:pr-4">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="capitalize text-sm md:text-base bg-red-600 px-3 md:px-6 py-1 md:py-2 rounded cursor-pointer">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
