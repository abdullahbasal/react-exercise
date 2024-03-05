import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center gap-5 w-full bg-[#282A3A] text-[white] px-5 py-2.5 rounded-md text-base font-semibold">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Tümü
      </NavLink>
      <NavLink
        to={"/phones"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Telefon
      </NavLink>
      <NavLink
        to={"/laptops"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Laptop
      </NavLink>
      <NavLink
        to={"/table"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Tablo
      </NavLink>
    </div>
  );
};

export default Navbar;
