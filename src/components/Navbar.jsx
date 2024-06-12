import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-full p-4 flex justify-between items-center z-50">
      <Link to="/">
        {/* masukan gambar*/}
        <img
          src="https://i.ibb.co.com/x2PHnJM/Logo-chill.png"
          alt="logo"
          className="w-44 object-contain cursor-pointer"
        />
      </Link>

      <div>
        <Link to="/login">
          <button className="capitalize pr-4">Login</button>
        </Link>

        <Link to="/signup">
          <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
