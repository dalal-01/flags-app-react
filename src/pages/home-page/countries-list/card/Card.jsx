import React, { useState } from "react";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

function Card({ country }) {
  const [selectedOpacity, setSelectedOpacity] = useState(1);
  // const dragAndDropFavorite = (event) => {
  //   setSelectedOpacity(0.5);
  //   let selectedCountryName = country.name.common;
  //   let favoriteCountries =
  //     JSON.parse(localStorage.getItem("favoriteCountries")) || [];
  //   const index = favoriteCountries.findIndex(
  //     (favorite) => favorite.name.common === selectedCountryName
  //   );
  //   if (index === -1) {
  //     favoriteCountries.push(country);
  //   }
  //   // event.preventDefault();
  //   const data =  event.dataTransfer.setData("text/plain", JSON.stringify(country));
   
  //   console.log("🚀 ~ file: Card.jsx:22 ~ dragAndDropFavorite ~ droppedCountry:", data)
  // };
function handelOnDrag(e){

}
  return (
    <div className="col" style={{ opacity: selectedOpacity }}>
      <div
        draggable="true"
        className="card border-0 country"
        onDragStart={handelOnDrag}
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
        <MdStar className="ms-auto " />
      </div>
    </div>
  );
}

export default Card;
