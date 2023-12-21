import React, { useEffect, useState, useContext } from "react";
import "./countries-list.css";
import { FavoriteStateContext } from "../../../favorite-context/FavoriteProvider.jsx";
import Card from "../card/Card.jsx";
import {
  fetchAllCountries,
  fetchCountriesByName,
} from "../../../countries-apis/FetchCountries.js";

function CountriesList({ selectedRegion, countryName }) {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [countriesFiltered, setCountriesFiltered] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { favoriteCountries } = useContext(FavoriteStateContext);
  const delay = 100;
  let timeoutId = null;
  const allCountriesURL = "all";
  const countriesByNameURL = `name/${countryName}`;

  const filterFunction = (countries) => {
    const countriesResult = countries.filter((country) => {
      if (selectedRegion === "No Filter") {
        return true;
      } else if (selectedRegion === "Favorites") {
        return favoriteCountries.some((favoriteCountry) => {
          return favoriteCountry.name.common === country.name.common;
        });
      } else {
        return country.region === selectedRegion;
      }
    });
    return countriesResult;
  };

  useEffect(() => {
    fetchAllCountries(allCountriesURL)
      .then(function (response) {
        setListOfCountries(response.data);
      })
      .catch(function (error) {
        setErrorMessage("Error fetching countries");
      });
  }, []);

  useEffect(() => {
    let ignore = false;
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (countryName.trim() === "") {
        setCountriesFiltered(listOfCountries);
        const countriesResult = filterFunction(listOfCountries);
        if (!ignore) {
          setCountriesFiltered(countriesResult);
          setErrorMessage("");
        }
      } else {
        fetchCountriesByName(countriesByNameURL)
          .then(function (response) {
            const countriesResult = filterFunction(response.data);
            if (!ignore) {
              setCountriesFiltered(countriesResult);
              setErrorMessage("");
            }
          })
          .catch(function (error) {
            setErrorMessage(error.response.data.message);
          });
      }
    }, delay);
    return () => {
      ignore = true;
      clearTimeout(timeoutId);
    };
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
        (errorMessage || countriesFiltered.length === 0) ? (
          <h3 className="w-100">{errorMessage || "No countries found"}</h3>
        ) : (
          countriesFiltered.map((country) => {
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
