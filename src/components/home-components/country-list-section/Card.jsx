import React from "react";
function Card({ countryInfo }) {
  return (
    <div className="col">
      <div draggable="true" className="card border-0 country">
        <a href="#" className="card border-0">
          <img
            src={countryInfo.img}
            alt={`${countryInfo.name} flag`}
            className="card-img-top"
          />
        </a>
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
      </div>
    </div>
  );
}

export default Card;
