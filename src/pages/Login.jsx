




import React from "react";
import { useNavigate } from "react-router-dom";
import DarTechnology from "../assets/image/image-removebg-preview.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login logic
    navigate("/dashboard");
  };

  return (
    <div className="bg-green-700 flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={handleLogin}
        className="bg-black p-6 rounded-2xl shadow-lg w-full max-w-md pb-10 "
      >
        <div className="flex justify-center mb-4">
          <img src={DarTechnology} alt="Logo" className="w-[150px] h-[150px]" />
        </div>
        <h2 className="text-4xl font-bold text-center mb-6 text-green-700">
         Login
        </h2>

        <div className="mb-4 relative">
          <MdEmail className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <div className="mb-4 relative">
          <RiLockPasswordFill
            className="absolute left-3 top-3 text-gray-400"
            size={20}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
