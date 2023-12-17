import React, { useEffect, useRef, useState } from "react";
import "./countries-list.css";
import Card from "./Card.jsx";
import axios from "axios";

function CountriesList({ selectedRegion, countryName }) {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [countriesFiltered, setCountriesFiltered] = useState([]);
  const [listOfCountriesByName, setListOfCountriesByName] = useState([]);
  const prevCountryName = useRef('');

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(function (response) {
        setListOfCountries(response.data);
        setCountriesFiltered(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let ignore = false;

    if (prevCountryName.current !== countryName && countryName) {
      console.log("a")
      axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(function (response) {
          setListOfCountriesByName(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    let countriesResult;
    if (listOfCountriesByName.length == 0) {
      countriesResult = listOfCountries.filter((country) => {
        if (selectedRegion === "No Filter") {
          return true;
        } else {
          return country.region === selectedRegion;
        }
      });
    } else {
      countriesResult = listOfCountriesByName.filter((country) => {
        if (selectedRegion === "No Filter") {
          return true;
        } else {
          return country.region === selectedRegion;
        }
      });
    }
    if (!ignore) {
      setCountriesFiltered(countriesResult);
    }
    console.log("🚀 ~ file: CountriesList.jsx:9 ~ CountriesList ~ countriesFiltered:", countriesFiltered)
    prevCountryName.current = countryName;

    return () => {
      ignore = true;
    };

  }, [selectedRegion, countryName]);

  return (
    <div className="col-12 col-md-9 countries-list">
      <div
        className="country-list row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3"
        id="country-list"
      >
        {countriesFiltered.map((country) => {
          return (
            <Card
              key={country.region + country.name.common}
              country={country}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
