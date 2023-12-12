import './favourite-countries.css'
import { TfiClose } from "react-icons/tfi";
import icImg from "../../../assets/img/flags/is.svg";
import Image from '../../../components/image/Image.jsx';


import React from "react";

function FavouriteCountries() {
  return (
    <aside className="favourites col-3 pe-1">
      <div className="card p-3">
        <h2 className="fw-bold">Favourites</h2>
        <div className="favourite-countries ">
          <div className="d-flex mb-3 align-items-center">
            <Image src={icImg} alt=""></Image>
            <div
              className="favourite-country-name  ps-2 text-truncate"
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

export default FavouriteCountries;
