import React from "react";
import icImg from "../../../assets/img/flags/ax.svg";
import { TfiClose } from "react-icons/tfi";

function FavouriteCountry() {
  return (
    <div className="d-flex mb-3 align-items-center">
      <div className="">
        <img className="rounded-2" src={icImg} alt="" />
      </div>
      <div className="favouriteCountryName  ps-2 text-truncate" title="iceland">
        iceland
      </div>
      <div className="ms-auto">
        <TfiClose className="close-icon" />
      </div>
    </div>
  );
}

export default FavouriteCountry;
