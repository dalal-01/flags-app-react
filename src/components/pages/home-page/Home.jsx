import React, { useEffect, useState } from "react";
import Header from "../../header/Header.jsx";
import { IoMoonOutline } from "react-icons/io5";
import "./home.css";
import Button from "../../button/Button.jsx";
import Input from "../../input/Input.jsx";
import { IoSearchSharp } from "react-icons/io5";
import Dropdown from "../../dropdown/Dropdown.jsx";
import FavouriteCountries from "./favourite-countries-section/FavouriteCountries.jsx";
import CountriesList from "./countries-list/CountriesList.jsx";

function Home() {
  const [countryName, setCountryName] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Filter by");
  const [darkMode, setDarkMode] = useState(false);


  const options = [
    "No Filter",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
    "Favourites",
  ];
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Header>
        <h1 className="m-0">Where in the world?</h1>
        <div className="dark-mode-button" onClick={toggleDarkMode}>
          <Button>
            <IoMoonOutline className="dark-mode" />
            <span>Dark Mode</span>
          </Button>
        </div>
      </Header>
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
          <FavouriteCountries/>
          <CountriesList/>
        </div>
      </main>
    </>
  );
}

export default Home;
