import React from "react";
import './country-info.css'
import alFlag from "../../../assets/img/flags/de.svg";
import Image from '../../../components/image/Image.jsx'
import CountryInfoDetails from './CountryInfoDetails.jsx'
import BorderCountry from './BorderCountries.jsx'
function CountryInfo() {
  return (
    <div className="w-100 row row-cols-1 row-cols-sm-1 row-cols-md-2">
      <section className="col flag-section">
        <Image src={alFlag} alt="belgium flag"></Image>
      </section>
      <section className="col content-section  ">
     <h4 className="country-name mb-4 ">belgium</h4>
     <CountryInfoDetails></CountryInfoDetails>
     <BorderCountry></BorderCountry>
    </section>
    </div>
  );
}

export default CountryInfo;
