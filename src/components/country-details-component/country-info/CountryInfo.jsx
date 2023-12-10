import React from "react";
import CountryFlag from "./CountryFlag.jsx";
import alFlag from "../../../assets/img/flags/de.svg"
import CountryContent from "./CountryContent.jsx";

function CountryInfo() {
  return (
    <div
      className="w-100 row row-cols-1 row-cols-sm-1 row-cols-md-2"
      id="country-details"
    >
        <CountryFlag flag={alFlag}/>
        <CountryContent/>
     
    </div>
  );
}

export default CountryInfo;
