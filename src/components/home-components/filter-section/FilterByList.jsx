import React, { useState } from "react";

function FilterByList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter by ");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  return (
    <div className="dropdown filter-by-list py-3 rounded">
      <button
        className="btn dropdown-toggle w-100"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen ? "true" : "false"}
      >
        {selectedRegion}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
      <ul className={`dropdown-menu w-100 ${isOpen ? "show" : ""}`}>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleRegionSelect("No Filter")}
          >
            No Filter
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleRegionSelect("Africa")}
          >
            Africa
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleRegionSelect("America")}
          >
            America
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleRegionSelect("Asia")}
          >
            Asia
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleRegionSelect("Europe")}
          >
            Europe
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleRegionSelect("Oceania")}
          >
            Oceania
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleRegionSelect("Favourites")}
          >
            Favourites
          </span>
        </li>
      </ul>
    </div>
  );
}

export default FilterByList;
