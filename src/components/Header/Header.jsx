import React from "react";
import "./Header.css";
import { IoMoonOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="px-4 px-md-5 py-2 sticky-top">
      <nav className="navbar align-items-center">
        <h1 className="m-0">Where in the world?</h1>
        <button className="dark-mode d-flex border-0 gap-2 ">
          <IoMoonOutline />
          <span>Dark Mode</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
