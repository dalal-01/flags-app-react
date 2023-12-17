import React from "react";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

function Card({ country }) {
  return (
    <div className="col">
      <div draggable="true" className="card border-0 country">
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
        <MdStar className="ms-auto " />
      </div>
    </div>
  );
}

export default Card;
