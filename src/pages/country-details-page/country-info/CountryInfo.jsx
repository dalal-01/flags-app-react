import React, { useEffect, useState } from "react";
import "./country-info.css";
import BorderCountry from "../border-countries/BorderCountries.jsx";
import { useParams } from "react-router-dom";
import { fetchCountriesByCommonName } from "../../../apis/FetchCountries.js";

function CountryInfo() {
  const { countryName } = useParams();
  const [countrySelectedInfo, setCountrySelectedInfo] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const countriesByCommonNameURL = `name/${countryName}?fullText=true`;


  useEffect(() => {
    fetchCountriesByCommonName(countriesByCommonNameURL)
      .then(function (response) {
        let result = response.data;
        setCountrySelectedInfo(result[0]);
        setErrorMessage("");
      })
      .catch(function (error) {
        setErrorMessage("Error fetching country");
        console.log(error);
      });
  }, [countryName]);

  return (
    <div>
      {errorMessage ? (
        <h3 className="w-100 text-center text-danger">{errorMessage}</h3>
      ) : countrySelectedInfo ? (
        <div className="w-100 row row-cols-1 row-cols-sm-1 row-cols-md-2">
          <section className="col flag-section">
            <img
              src={countrySelectedInfo.flags.svg}
              alt={countrySelectedInfo.name.official}
            />
          </section>
          <section className="col content-section  ">
            <h4 className="country-name mb-4 ">
              {countrySelectedInfo.name.official}
            </h4>
            <div className="country-details d-flex flex-column flex-sm-row justify-content-between gap-5">
              <div className="left-side">
                <div>
                  native name:{" "}
                  <span className="fw-light">
                    {countrySelectedInfo.name.common}
                  </span>
                </div>
                <div>
                  population:{" "}
                  <span className="fw-light">
                    {countrySelectedInfo.population.toLocaleString()}
                  </span>
                </div>
                <div>
                  region:{" "}
                  <span className="fw-light">{countrySelectedInfo.region}</span>
                </div>
                <div>
                  sub region:{" "}
                  <span className="fw-light">
                    {countrySelectedInfo.subregion}
                  </span>
                </div>
                <div>
                  capital:{" "}
                  <span className="fw-light">
                    {countrySelectedInfo.capital}
                  </span>
                </div>
              </div>
              <div className="right-side">
                <div>
                  top level domain:{" "}
                  <span className="fw-light">{countrySelectedInfo.cca2}</span>
                </div>
                <div>
                  currencies:{" "}
                  <span className="fw-light">
                    {Object.keys(countrySelectedInfo.currencies).join(" ,")}
                  </span>
                </div>
                <div>
                  languages:
                  <span className="fw-light">
                    {Object.values(countrySelectedInfo.languages).join(" ,")}
                  </span>
                </div>
              </div>
            </div>
            <BorderCountry
              borderCountries={countrySelectedInfo.borders}
            ></BorderCountry>
          </section>
        </div>
      ) : (
        <section id="progress-indicator">
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default CountryInfo;
