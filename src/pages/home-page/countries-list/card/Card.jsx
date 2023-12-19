import React, { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";

function Card({ country }) {
  const storedFavoriteCountries =
    JSON.parse(localStorage.getItem("storedFavoriteCountries")) || [];

  const index = storedFavoriteCountries.findIndex(
    (favorite) => favorite.name.common === country.name.common
  );
  let color;
  if (index == -1) {
    color = "blue";
  } else {
    color = "red";
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: country },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handelDeleteOrAddFavorite = (country) => {
    if (index == -1) {
      color = "red";
      storedFavoriteCountries.push(country);
      localStorage.setItem(
        "storedFavoriteCountries",
        JSON.stringify(storedFavoriteCountries)
      );
    } else {
      color = "gry";
      storedFavoriteCountries.splice(index, 1);
      localStorage.setItem(
        "storedFavoriteCountries",
        JSON.stringify(storedFavoriteCountries)
      );
    }
  };
  return (
    <div className="col">
      <div
        ref={drag}
        className="card country"
        style={{ border: isDragging ? "5px solid red" : "0px" }}
      >
        <Link to="/country-details" className="card border-0">
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className="card-img-top"
          />
        </Link>
        <div className="card-body p-4">
          <div
            className="country-name text-truncate pb-3"
            title={country.name.common}
          >
            {country.name.common}
          </div>
          <p>
            population: <span>{country.population.toLocaleString()}</span>
          </p>
          <p>
            region: <span>{country.region}</span>
          </p>
          <p>
            capital: <span>{country.capital}</span>
          </p>
        </div>
        <MdStar
          className="ms-auto "
          onClick={() => handelDeleteOrAddFavorite(country)}
          style={{ color: color }}
        />
      </div>
    </div>
  );
}

export default Card;
