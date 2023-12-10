import React from "react";
import "./Home.css";
import Header from "../Header/Header.jsx";
import FilterSection from "./filter-section/FilterSection.jsx";
import CountryList from "./country-list-section/CountriesList.jsx";
import FavouritesSection from "./favourites-section/FavouritesSection.jsx";

function Home() {
  return (
    <div>
      <Header></Header>
      <FilterSection />
      <article className="px-5">
        <div className="row">
          <FavouritesSection />
          <CountryList />
        </div>
      </article>
    </div>
  );
}

export default Home;
