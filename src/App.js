// import "./App.css";
// import React, { useEffect, useState } from "react";
// import Home from "../src/pages/home-page/Home.jsx";
// import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CountryDetails from "../src/pages/country-details-page/CountryDetails.jsx";
// import Header from "./components/header/Header.jsx";
// import Button from "./components/button/Button.jsx";
// import { IoMoonOutline } from "react-icons/io5";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };
//   return (
//     <div>
//       <Header>
//         <h1 className="m-0">Where in the world?</h1>
//         <div className="dark-mode-button" onClick={toggleDarkMode}>
//           <Button>
//             <IoMoonOutline className="dark-mode" />
//             <span>Dark Mode</span>
//           </Button>
//         </div>
//       </Header>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/country-details" element={<CountryDetails />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/Home.jsx";
import CountryDetails from './pages/country-details-page/CountryDetails.jsx'
import Header from "../src/components/header/Header.jsx";
import Button from "../src/components/button/Button.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { IoMoonOutline } from "react-icons/io5";
function App() {
  const [darkMode, setDarkMode] = useState(false);
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
    <div>
      <Header>
        <h1 className="m-0">Where in the world?</h1>
        <div className="dark-mode-button" onClick={toggleDarkMode}>
          <Button>
            <IoMoonOutline className="dark-mode" />
            <span>Dark Mode</span>
          </Button>
        </div>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country-details" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
