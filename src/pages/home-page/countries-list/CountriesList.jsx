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
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchAllCountries();
        setListOfCountries(response);
      } catch (error) {
        setErrorMessage("Error fetching countries");
      }
    };
    fetchData();
    setLoading(false)
    
  }, []);

  useEffect(() => {
    setLoading(true);
    if (countryName.trim() !== "") {
      const fetchData = async (countryName) => {
        try {
          const response = await fetchCountriesByName(countryName);
         setCountriesFilteredByName(response);
         console.log(countriesFilteredByName,"l");
        } catch (error) {
          setCountriesFilteredByName([]);
          setErrorMessage(
            error.response
              ? error.response.data.message
              : "Error fetching countries"
          );
        }
      };
      const debouncedFetchData = Debouncing(
        () => fetchData(countryName),
        delay
      );
      debouncedFetchData();
    }
  }, [countryName]);

  useEffect(() => {
    const debouncedUpdateFilteredCountries = Debouncing(
      updateFilteredCountries,
      delay
    );
    debouncedUpdateFilteredCountries();
  }, [selectedRegion, countryName, listOfCountries, favoriteCountries]);

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

  const updateFilteredCountries = () => {
    let countriesResult = [];
    if (countryName.trim() === "") {
      countriesResult = filterByRegion(listOfCountries, selectedRegion);
      setFilteredCountryList(countriesResult);
      setLoading(false);
      setErrorMessage("");
    } else {
      countriesResult = filterByRegion(countriesFilteredByName, selectedRegion);
      setFilteredCountryList(countriesResult);
    setLoading(false);
      setErrorMessage("");
    }
    

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
