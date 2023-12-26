import React, { useEffect, useState, useContext } from "react";
import "./countries-list.css";
import { FavoriteStateContext } from "../../../favorite-context/FavoriteProvider.jsx";
import Card from "../card/Card.jsx";
import {
  fetchAllCountries,
  fetchCountriesByName,
} from "../../../apis/FetchCountries.js";
import {
  NO_FILTER,
  FAVORITES,
} from "../../../data/array-of-regions/ArrayOfRegions.js";
import Debouncing from "../../../debouncing/Debouncing.js";

function CountriesList({ selectedRegion, countryName }) {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { favoriteCountries } = useContext(FavoriteStateContext);
  const delay = 100;

  const filterFunction = (countries) => {
    if (selectedRegion === NO_FILTER) {
      return true;
    }
    const countriesResult = countries.filter((country) => {
       if (selectedRegion === FAVORITES) {
        return favoriteCountries.some((favoriteCountry) => {
          return favoriteCountry.name.common === country.name.common;
        });
      } else {
        return country.region === selectedRegion;
      }
    });
    return countriesResult;
  };
  const updateFilteredCountries = () => {
    console.log("l")
    setFilteredCountryList(listOfCountries)
    console.log(filteredCountryList)
    // if (countryName.trim() === "") {
    //   setFilteredCountryList(listOfCountries)
    //   console.log(filteredCountryList)
    //   const countriesResult = filterFunction(listOfCountries);
    //   setFilteredCountryList(countriesResult);
    //   setErrorMessage("");
    // } else {
    //   fetchCountriesByName(countryName)
    //     .then(function (response) {
    //       const countriesResult = filterFunction(response.data);
    //       setFilteredCountryList(countriesResult);
    //       setErrorMessage("");
    //     })
    //     .catch(function (error) {
    //       setErrorMessage(error.response.data.message);
    //     });
    // }
  };
  useEffect(() => {
    fetchAllCountries()
      .then(function (response) {
        setListOfCountries(response.data);
      })
      .catch(function (error) {
        setErrorMessage("Error fetching countries");
      });
  }, []);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      updateFilteredCountries();
    }, 500);

    return () => {
      clearTimeout(debounceTimeout);
    };
    // Debouncing(updateFilteredCountries, delay);
  }, [selectedRegion, countryName, listOfCountries, favoriteCountries]);

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
        (errorMessage || filteredCountryList.length === 0) ? (
          <h3 className="w-100">{errorMessage || "No countries found"}</h3>
        ) : (
          filteredCountryList.map((country) => {
            const isFavorite = favoriteCountries.some(
              (favCountry) => favCountry.name.common === country.name.common
            );

            return (
              <Card
                key={country.name.common}
                country={country}
                isFavorite={isFavorite}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default CountriesList;
