import React, { useEffect, useState } from "react";
import "./home.css";
import AppInput from "../../components/app-input/AppInput.jsx";
import { IoSearchSharp } from "react-icons/io5";
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import FavoriteCountries from "./favorite-countries-section/FavoriteCountries.jsx";
import CountriesList from "./countries-list/CountriesList.jsx";
import { FavoriteProvider } from "../../favorite-context/FavoriteProvider.jsx";

function Home() {
  const storedSelectedRegion = localStorage.getItem('selectedRegion') || "No Filter";
  const storedSelectedName = localStorage.getItem('selectedName') || "";

  const [countryName, setCountryName] = useState(storedSelectedName);
  const [selectedRegion, setSelectedRegion] = useState(storedSelectedRegion);


  const options = [
    "No Filter",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Favorites",
  ];
  useEffect(() => {
    localStorage.setItem("selectedRegion", selectedRegion);
    localStorage.setItem("selectedName", countryName);
  }, [selectedRegion,countryName]);

  return (
    <>
      <section className="filter-section px-4 px-md-5 py-4 py-md-5 d-flex justify-content-between flex-wrap gap-5">
        <div className="filter-by-search rounded ">
          <AppInput
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
        <FavoriteProvider>
          <FavoriteCountries />
        
          <CountriesList
            selectedRegion={selectedRegion}
            countryName={countryName}
          />
           </FavoriteProvider>
        </div>
      </main>
    </>
  );
}

export default Home;
