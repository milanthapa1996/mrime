import React from "react";
import Logo from "../assets/logo.png";
import logoText from "../assets/logo_text.png";
import Avatar from "../assets/profile.png";
const Navbar = () => {
  return (
    <nav className="p-3 bg-[#26719F] flex items-center justify-between">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="logo" />
        <img src={logoText} alt="logo-text" className="h-8 w-24 ml-2" />
      </div>
      <div>
        <ul className="space-x-10">
          <li className="inline-block text-white text-lg font-medium cursor-pointer hover:bg-gray-200 p-1 rounded-lg hover:text-[#26719F] ">
            Dashboard
          </li>
          <li className="inline-block text-white text-lg font-medium cursor-pointer hover:bg-gray-200 p-1 rounded-lg hover:text-[#26719F] ">
            Reports
          </li>
          <li className="inline-block text-white text-lg font-medium cursor-pointer hover:bg-gray-200 p-1 rounded-lg hover:text-[#26719F] ">
            Neuropsychology
          </li>
          <li className="inline-block text-white text-lg font-medium cursor-pointer hover:bg-gray-200 p-1 rounded-lg hover:text-[#26719F] ">
            Neuroradiology
          </li>
          <li className="inline-block text-white text-lg font-medium cursor-pointer hover:bg-gray-200 p-1 rounded-lg hover:text-[#26719F] ">
            Bookings
          </li>
        </ul>
      </div>
      <div>
        <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
