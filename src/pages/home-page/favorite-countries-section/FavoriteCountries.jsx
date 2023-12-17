import './favorite-countries.css'
import { TfiClose } from "react-icons/tfi";
import icImg from "../../../assets/img/flags/is.svg";


import React from "react";

function FavoriteCountries() {
  return (
    <aside className="favorites col-3 pe-1">
      <div className="card p-3">
        <h2 className="fw-bold">Favorites</h2>
        <div className="favorite-countries ">
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
