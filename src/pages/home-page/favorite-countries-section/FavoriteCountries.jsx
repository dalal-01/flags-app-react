import './favorite-countries.css'
import { TfiClose } from "react-icons/tfi";
import icImg from "../../../assets/img/flags/is.svg";


import React from "react";

function FavoriteCountries() {
  const handleDrop = (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData("text/plain");
    const droppedCountry = JSON.parse(data);

    // Handle the dropped country data here
    // For example, add it to the list of favorites or perform other actions
    console.log("Dropped country:", droppedCountry);
  };
  return (
    <aside className="favorites col-3 pe-1">
      <div className="card p-3">
        <h2 className="fw-bold">Favorites</h2>
        <div className="favorite-countries "  onDrop={handleDrop}>
          <div className="d-flex mb-3 align-items-center">
            <img src={icImg} alt=""/>
            <div
              className="favorite-country-name  ps-2 text-truncate"
              title="iceland"
            >
              iceland
            </div>
            <div className="ms-auto">
              <TfiClose className="close-icon" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FavoriteCountries;
