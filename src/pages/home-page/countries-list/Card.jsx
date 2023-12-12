import React from "react";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

function Card({ countryInfo }) {
  return (
    <div className="col">
      <div draggable="true" className="card border-0 country">
        <Link to="/country-details" className="card border-0">
          <img
            src={countryInfo.img}
            alt={`${countryInfo.name} flag`}
            className="card-img-top"
          />
        </Link>
        <div className="card-body p-4">
          <div
            className="country-name text-truncate pb-3"
            title={countryInfo.name}
          >
            {countryInfo.name}
          </div>
          <p>
            population: <span>{countryInfo.population}</span>
          </p>
          <p>
            region: <span>{countryInfo.region}</span>
          </p>
          <p>
            capital: <span>{countryInfo.capital}</span>
          </p>
        </div>
        <MdStar className="ms-auto " />
      </div>
    </div>
  );
}

export default Card;
