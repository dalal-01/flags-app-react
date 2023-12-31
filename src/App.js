import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/home/Home.jsx";
import CountryDetails from "./pages/country-details-page/country-details/CountryDetails.jsx";
import Header from "./components/Header/Header.jsx";
import AppButton from "../src/components/app-button/AppButton.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { IoMoonOutline } from "react-icons/io5";
import PageNotFound from "./pages/404-page/PageNotFound.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "./storage/LocalStorageUtils.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const darkModeStatusKey = "darkModeStatus";

  const storedDarkMode = getLocalStorageItem(darkModeStatusKey) === "true";

  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setLocalStorageItem(darkModeStatusKey, darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    setLocalStorageItem(darkModeStatusKey, darkMode);
  }, [darkMode]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
            <Route
              path="/country-details/:countryName"
              element={<CountryDetails />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DndProvider>
  );
}

export default App;
