import React from "react";
import FavouriteCountry from "./FavouriteCountry.jsx";

function FavouritesSection() {
  return (
    <aside className="favourites col-3 pe-1">
      <div className="card p-3">
        <h2 className="fw-bold">Favourites</h2>
        <div id="favourite-countries" className="favouriteCountries pe-2">
          <FavouriteCountry />
        </div>
      </div>
    </aside>
  );
}

export default FavouritesSection;
