import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen relative"
      style={{ backgroundImage: `url('/bg.jpeg')` }}
    >
      <div className="bg-white rounded-tl-[4rem] absolute bottom-0 right-0 h-[calc(100vh-220px)] w-full shadow-md p-8">
        <div className="font-semibold text-3xl text-center text-orange-400">
          Log In
        </div>
        <div className="grid gap-5 mt-16">
          <div className="flex justify-start gap-4 items-center bg-blue-50 rounded-lg text-gray-400 p-5">
            <MdEmail className="text-xl text-gray-300" />
            <input
              className="bg-blue-50 text-black text-sm"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex justify-start gap-4 items-center bg-blue-50 rounded-lg text-gray-400 p-5">
            <FaLock className="text-lg text-gray-300" />
            <input
              className="bg-blue-50 text-black text-sm"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <Link to="/contacts">
          <button className="w-full p-4 rounded-md text-white font-semibold bg-orange-400 mt-16">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
