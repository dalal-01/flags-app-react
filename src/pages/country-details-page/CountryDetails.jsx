import React from "react";
import "./country-details.css";
import AppButton from "../../components/app-button/AppButton.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";
import CountryInfo from "./country-info/CountryInfo.jsx";
import { Link } from "react-router-dom";

function CountryDetails() {
  return (
    <>
      <main className="px-4 px-md-5">
        <div className="go-back py-5 my-2">
          <AppButton>
            <Link to="/" className="btn d-inline-flex align-items-center">
              <IoIosArrowRoundBack className="arrow-back-icon px-1 " />
              <span className="pe-4">Back</span>
            </Link>
          </AppButton>
        </div>
        <CountryInfo></CountryInfo>
      </main>
    </>
  );
}

export default CountryDetails;
