import React from "react";
import "./countries-list.css";
import Card from "./Card.jsx";
import germanyImg from "../../../../assets/img/flags/de.svg";
import usImg from "../../../../assets/img/flags/us.svg";
import brImg from "../../../../assets/img/flags/br.svg";
import isImg from "../../../../assets/img/flags/is.svg";

function CountriesList() {
  let listOfCountry = [
    {
      id: 1,
      img: germanyImg,
      name: "germany",
      population: "81,770,900",
      region: "europe",
      capital: "berlin",
    },
    {
      id: 2,
      img: usImg,
      name: "united state of america",
      population: "323,947,000",
      region: "americas",
      capital: "washington, d.c.",
    },

    {
      id: 3,
      img: brImg,
      name: " brazil",
      population: "206,135,893",
      region: "americas",
      capital: "brazil",
    },
    {
      id: 4,
      img: isImg,
      name: "iceland",
      population: "334,300",
      region: "europe",
      capital: "reykjavík",
    },
    {
      id: 5,
      img: usImg,
      name: "united state of america",
      population: "323,947,000",
      region: "americas",
      capital: "washington, d.c.",
    },
  ];
  return (
    <div className="col-12 col-md-9 countries-list">
      <div
        className="country-list row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3"
        id="country-list"
      >
        {listOfCountry.map((country) => {
          return <Card key={country.id} countryInfo={country} />;
        })}
      </div>
    </div>
  );
}

export default CountriesList;
