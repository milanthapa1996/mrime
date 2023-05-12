import React from "react";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/profile.png";
import { NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="p-3 bg-[#26719F] flex items-center justify-between">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <ul className="space-x-10">
            <li className="inline-block text-white text-lg font-medium cursor-pointer hover:bg-gray-200 rounded-lg hover:text-[#26719F] ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-gray-200 p-2 text-lg rounded-lg text-[#26719F]" : ""
                }
              >
                Dashboard
              </NavLink>
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

      <Outlet />
    </>
  );
};

export default Navbar;
