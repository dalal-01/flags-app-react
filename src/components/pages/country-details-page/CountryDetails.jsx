import React from "react";
import "./country-details.css";
import Header from "../../header/Header.jsx";
import Button from "../../button/Button.jsx";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import CountryInfo from "./country-info/CountryInfo.jsx";

function CountryDetails() {
  return (
    <>
      <Header>
        <h1 className="m-0">Where in the world?</h1>
        <div className="dark-mode-button">
          <Button>
            <IoMoonOutline className="dark-mode" />
            <span>Dark Mode</span>
          </Button>
        </div>
      </Header>
      <main className="px-4 px-md-5">
        <div className="go-back py-5 my-2">
          <Button>
            <a href="#" className="btn d-inline-flex align-items-center">
              <IoIosArrowRoundBack className="arrwo-back-icon px-1 " />
              <span className="pe-4">Back</span>
            </a>
          </Button>
          
        </div>
        <CountryInfo></CountryInfo>
      </main>
    </>
  );
}

export default CountryDetails;
