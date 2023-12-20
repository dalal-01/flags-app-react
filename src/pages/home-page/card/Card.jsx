import React, { useContext } from "react";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";
import {
  FavoriteDispatchContext,
} from "../../../favorite-context/FavoriteProvider.jsx";

function Card({ country, isFavorite }) {
  const dispatch = useContext(FavoriteDispatchContext);

  let color;
 
  color=isFavorite?"rgb(255, 134, 0)":"rgb(192, 187, 187)";
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: country },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const addCountryToFavorite = (country) => {
    dispatch({ type: "ADD_COUNTRY", payload: country });
  };
  const handleDeleteFavorite = (countryToDelete) => {
    dispatch({ type: "DELETE_COUNTRY", payload: countryToDelete });
  };

  const handelDeleteOrAddFavorite = (country) => {
    if (isFavorite) {
      handleDeleteFavorite(country);
    } else {
      addCountryToFavorite(country);
    }
  };
  return (
    <div className="col">
      <div
        ref={drag}
        className="card country"
        style={{ opacity: isDragging ? "0.5" : "1" }}
      >
        <Link  to={`/country-details/${country.name.common}`} className="card border-0">
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
