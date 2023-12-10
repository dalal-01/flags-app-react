import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function FilterBySearch() {
  const [countryName, setCountryName] = useState("");
  return (
    <div className="filter-by-search py-3 d-flex align-items-center rounded">
      <IoSearchSharp className="ms-4" />
      <input
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        id="form-control"
        className="form-control border-0"
        type="search"
        placeholder="Search for a country..."
        aria-label="Search"
      />
    </div>
  );
}

export default FilterBySearch;
