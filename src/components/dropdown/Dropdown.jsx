import React, { useState } from "react";
import "./dropdown.css";
function Dropdown({ values, selectedValue, setValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleValue = (value) => {
    setValue(value);
    setIsOpen(false);
  };
  return (
    <div>
      <button
        className="btn dropdown-toggle w-100"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen ? "true" : "false"}
      >
        {selectedValue}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
      <ul className={`dropdown-menu w-100 ${isOpen ? "show" : ""}`}>
        {values.map((value) => {
          return (
            <li key={value}>
              <span
                className="dropdown-item"
                onClick={() => handleValue(value)}
              >
                {value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
