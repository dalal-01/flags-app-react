import React from "react";
import "./country-details.css";
import Button from "..//../components/button/Button.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";
import CountryInfo from "./country-info/CountryInfo.jsx";
import { Link } from "react-router-dom";

function CountryDetails() {
  return (
    <>
      <main className="px-4 px-md-5">
        <div className="go-back py-5 my-2">
          <Button>
            <Link to="/" className="btn d-inline-flex align-items-center">
              <IoIosArrowRoundBack className="arrwo-back-icon px-1 " />
              <span className="pe-4">Back</span>
            </Link>
          </Button>
        </div>
        <CountryInfo></CountryInfo>
      </main>
    </>
  );
}

export default CountryDetails;
