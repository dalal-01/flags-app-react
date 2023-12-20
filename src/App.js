import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/Home.jsx";
import CountryDetails from './pages/country-details-page/CountryDetails.jsx'
import Header from "../src/components/Header/Header.jsx"
import AppButton from "../src/components/app-button/AppButton.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { IoMoonOutline } from "react-icons/io5";
import PageNotFound from "./pages/home-page/404-page/PageNotFound.jsx";
import{DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend"
function App() {
  const storedDarkMode = localStorage.getItem('darkModeStatus') || false;

  const [darkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkModeStatus", darkMode);

  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkModeStatus", darkMode);

  };
  
  return (
    <DndProvider backend={HTML5Backend}>
    <div>
      <Header>
        <h1 className="m-0">Where in the world?</h1>
        <div className="dark-mode-button" onClick={toggleDarkMode}>
          <AppButton>
            <IoMoonOutline className="dark-mode" />
            <span>Dark Mode</span>
          </AppButton>
        </div>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country-details/:countryName" element={<CountryDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    </DndProvider>
  );
}

export default App;
