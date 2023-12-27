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
  const [countriesFilteredByName, setCountriesFilteredByName] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const { favoriteCountries } = useContext(FavoriteStateContext);
  const delay = 500;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchAllCountries();
        setListOfCountries(response);
        setLoading(false);
      } catch (error) {
        setErrorMessage("Error fetching countries");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (countryName.trim() !== "") {
      const fetchData = async (countryName) => {
        try {
          const response = await fetchCountriesByName(countryName);
          setCountriesFilteredByName(response);
          setLoading(false);
          setErrorMessage("");
        } catch (error) {
          setCountriesFilteredByName([]);
          setErrorMessage("Error fetching countries");
          setLoading(false);
        }
      };
      const debounceTimeout = setTimeout(() => {
        fetchData(countryName);
      }, 500);

      return () => {
        clearTimeout(debounceTimeout);
      };
    }
  }, [countryName]);

  const updateFilteredCountries = () => {
    let countriesResult = [];
    let currentErrorMessage = "";
    let isLoading = false;
    if (countryName.trim() === "") {
      countriesResult = filterByRegion(listOfCountries, selectedRegion);
    } else {
      if (countriesFilteredByName && countriesFilteredByName.length > 0) {
        countriesResult = filterByRegion(
          countriesFilteredByName,
          selectedRegion
        );
      } else {
        countriesResult = [];
        currentErrorMessage = "No countries found";
      }
    }
    if (countriesResult.length === 0) {
      currentErrorMessage = "No countries found";
    }
    setFilteredCountryList(countriesResult);
    setLoading(isLoading);
    setErrorMessage(currentErrorMessage);
  };

  const debouncedUpdateFilteredCountries = Debouncing(
    updateFilteredCountries,
    delay
  );

  useEffect(() => {
    setLoading(true);
    debouncedUpdateFilteredCountries();
  }, [
    selectedRegion,
    countryName,
    listOfCountries,
    favoriteCountries,
    countriesFilteredByName,
  ]);

  const filterByRegion = (countries, selectedRegion) => {
    if (selectedRegion === NO_FILTER) {
      return countries;
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

  return (
    <div className="col-12 col-md-9 countries-list">
      <div
        className="country-list row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3"
        id="country-list"
      >
        {loading ? (
          <section id="progress-indicator" className="w-100">
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </section>
        ) : errorMessage ? (
          <h3 className="w-100">{errorMessage}</h3>
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
