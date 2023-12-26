import React, { useEffect, useState } from "react";
import "./home.css";
import AppInput from "../../../components/app-input/AppInput.jsx";
import { IoSearchSharp } from "react-icons/io5";
import Dropdown from "../../../components/dropdown/Dropdown.jsx";
import FavoriteCountries from "../favorite-countries/FavoriteCountries.jsx";
import CountriesList from "../countries-list/CountriesList.jsx";
import { FavoriteProvider } from "../../../favorite-context/FavoriteProvider.jsx";
import { regions } from "../../../data/array-of-regions/ArrayOfRegions.js";
import { getLocalStorageItem,setLocalStorageItem } from "../../../storage/LocalStorageUtils.js";
function Home() {
  const selectedRegionKey = 'selectedRegion';
  const selectedNameKey = 'selectedName';

  const storedSelectedRegion = getLocalStorageItem(selectedRegionKey, 'No Filter');
  const storedSelectedName = getLocalStorageItem(selectedNameKey, '');

  const [countryName, setCountryName] = useState(storedSelectedName);
  const [selectedRegion, setSelectedRegion] = useState(storedSelectedRegion);


  const options = regions
  useEffect(() => {
    setLocalStorageItem(selectedRegionKey, selectedRegion);
    setLocalStorageItem(selectedNameKey, countryName);
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
