import React from "react";
import Gambar from "../assets/img/bbb.jpg";
import chill from "../assets/img/Logo-chill.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={Gambar}
          alt="///"
        />

        <div className="bg-black/20 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-20 z-20">
          <div className="max-w-[450px] h-[700px] mx-auto bg-black/80 rounded-xl">
            <div className="max-w-[320px] mx-auto py-16">
              <img className="w-32 mx-auto" src={chill} alt="" />
              <h1 className="text-3xl mt-5 font-nsans-bold text-center">
                Login
              </h1>
              <p className="text-center mt-2">Welcome Back!</p>

              <form className="w-full flex flex-col py-8">
                <input
                  className="p-2 my-2 bg-gray-800 rounded"
                  placeholder="Email"
                  autoComplete="email"
                  type="email"
                />
                <input
                  className="p-2 my-2 bg-gray-800 rounded"
                  placeholder="Password"
                  autoComplete="current-password"
                  type="password"
                />
                <div className="flex justify-between items-center text-xs">
                  <p className="my-0">
                    <span className="text-gray-400">
                      Don't have an account?
                    </span>
                    <Link to="/signup"> Sign Up</Link>
                  </p>
                  <p>Forgot Password</p>
                </div>

                <Link to="/">
                  <button className="flex items-center  justify-center w-full p-2 my-6 text-white bg-gray-600 rounded-full shadow-md hover:bg-gray-800">
                    Login
                  </button>
                </Link>
                <p className="text-center text-gray-100">Or Signup with</p>
                <button className="flex items-center border border-gray-600 justify-center w-full p-2 my-5 text-white bg-black rounded-full shadow-md hover:bg-gray-800">
                  <FcGoogle className="mr-4" />
                  Login with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;