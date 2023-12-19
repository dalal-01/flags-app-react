import React, { useEffect, useState, useRef, useContext } from "react";
import "./countries-list.css";
import {
  FavoriteStateContext,
  FavoriteDispatchContext,
} from "../../../favorite-context/FavoriteProvider.jsx";

import Card from "./card/Card.jsx";
import axios from "axios";

function CountriesList({ selectedRegion, countryName }) {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [countriesFiltered, setCountriesFiltered] = useState([]);
  const prevCountryName = useRef("");
  const [errorMessage, setErrorMessage] = useState("");
  const { favoriteCountries } = useContext(FavoriteStateContext);
  console.log("🚀 ~ file: CountriesList.jsx:17 ~ CountriesList ~ favoriteCountries:", favoriteCountries)

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(function (response) {
        setListOfCountries(response.data);
        setCountriesFiltered(response.data);
      })
      .catch(function (error) {
        setErrorMessage("Error fetching countries");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let ignore = false;
    if (prevCountryName.current !== countryName && countryName) {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(function (response) {
          const countriesResult = response.data.filter((country) => {
            if (selectedRegion === "No Filter") {
              return true;
            } else {
              return country.region === selectedRegion;
            }
          });

          if (!ignore) {
            setCountriesFiltered(countriesResult);
            setErrorMessage("");
            localStorage.setItem(
              "filteredCountries",
              JSON.stringify(countriesResult)
            );
          }
        })
        .catch(function (error) {
          console.log(error.response.data.message);
          setErrorMessage(error.response.data.message);
        });
    } else {
      const countriesResult = listOfCountries.filter((country) => {
        if (selectedRegion === "No Filter") {
          return true;
        } else {
          return country.region === selectedRegion;
        }
      });

      if (!ignore) {
        setCountriesFiltered(countriesResult);
        setErrorMessage("");
        localStorage.setItem(
          "filteredCountries",
          JSON.stringify(countriesResult)
        );
      }
    }
  
    prevCountryName.current = countryName;

    return () => {
      ignore = true;
    };
  }, [selectedRegion, countryName, listOfCountries]);

  return (
    <div className="col-12 col-md-9 countries-list">
      <div
        className="country-list row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3"
        id="country-list"
      >
        {!errorMessage && listOfCountries.length === 0 && (
          <section id="progress-indicator" className="w-100">
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </section>
        )}
        {listOfCountries.length > 0 &&
        (errorMessage || countriesFiltered.length === 0) ? (
          <h3 className="w-100">{errorMessage || "No countries found"}</h3>
        ) : (
          countriesFiltered.map((country) => {
            const isFavorite = favoriteCountries.some(
              (favCountry) => favCountry.name.common === country.name.common
            );

            return <Card key={country.name.common} country={country} isFavorite={isFavorite} />;
          })
        )}
    </div>
  </div>
  );
}

export default CountriesList;
