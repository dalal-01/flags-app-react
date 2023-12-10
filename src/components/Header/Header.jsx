import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <header className="px-4 px-md-5 py-2 sticky-top">
      <nav className="navbar align-items-center">{children}</nav>
    </header>
  );
}

export default Header;
