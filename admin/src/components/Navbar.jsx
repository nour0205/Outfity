import React from "react";
import { assets } from "../assets/admin_assets/assets";
import Cookies from "js-cookie";

function Navbar({ setToken }) {
  const logout = () => {
    Cookies.remove("token");
    localStorage.clear();
    setToken("");
  };

  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.Outfity2} alt="" />
      <button
        onClick={logout}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
