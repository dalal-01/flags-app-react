import React, { useState } from "react";
import "./home.css";
import Input from "../../components/input/Input.jsx";
import { IoSearchSharp } from "react-icons/io5";
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import FavouriteCountries from "./favourite-countries-section/FavouriteCountries.jsx";
import CountriesList from "./countries-list/CountriesList.jsx";

function Home() {
  const [countryName, setCountryName] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Filter by");

  const options = [
    "No Filter",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
    "Favourites",
  ];

  return (
    <>
      <section className="filter-section px-4 px-md-5 py-4 py-md-5 d-flex justify-content-between flex-wrap gap-5">
        <div className="filter-by-search rounded ">
          <Input
            type={"search"}
            placeholder="Search for a country..."
            icon={<IoSearchSharp className="ms-4" />}
            value={countryName}
            setValue={setCountryName}
          />
        </div>
        <div className="dropdown filter-by-list py-3 rounded">
          <Dropdown
            values={options}
            selectedValue={selectedRegion}
            setValue={setSelectedRegion}
          />
        </div>
      </section>
      <main className="px-5">
        <div className="row">
          <FavouriteCountries />
          <CountriesList />
        </div>
      </main>
    </>
  );
}

export default Home;
