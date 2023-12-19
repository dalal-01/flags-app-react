// import "./favorite-countries.css";
// import { TfiClose } from "react-icons/tfi";
// import icImg from "../../../assets/img/flags/is.svg";
// import { useDrop } from "react-dnd";

// import React, { useEffect, useState } from "react";

// function FavoriteCountries() {
//   let storedFavoriteCountries =JSON.parse(localStorage.getItem("storedFavoriteCountries")) || [];

//   const [favoriteCountries, setFavoriteCountries] = useState(storedFavoriteCountries);
 
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "div",
//     drop: (item) => addCountryToFavorite(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver,
//     }),
//   }));
//   const addCountryToFavorite = (country) => {

//     storedFavoriteCountries = JSON.parse(localStorage.getItem("storedFavoriteCountries")) ||[];
//     const index = storedFavoriteCountries.findIndex( (favorite) => favorite.name.common === country.name.common ) ;
//        if(index==-1){
//     setFavoriteCountries((prevFavoriteCountries) => [
//         ...prevFavoriteCountries,
//         country,
//       ]);}
   
//   };
//   useEffect(()=>{
// console.log(favoriteCountries)
// localStorage.setItem("storedFavoriteCountries",JSON.stringify(favoriteCountries))

//   },[favoriteCountries,addCountryToFavorite])

// const handelDeleteFavorite=(country) => {
//   console.log("🚀 ~ file: FavoriteCountries.jsx:35 ~ handelDeleteFavorite ~ country:", country)
//   const index = favoriteCountries.indexOf(country);
//   if (index > -1) {
//     const updatedFavoriteCountries = [...favoriteCountries];
//     updatedFavoriteCountries.splice(index, 1);
//     setFavoriteCountries(updatedFavoriteCountries)
//   }

// }

//   return (
//     <aside className="favorites col-3 pe-1">
//       <div className="card p-3">
//         <h2 className="fw-bold">Favorites</h2>
//         <div className="favorite-countries " ref={drop}>
//           {favoriteCountries.length > 0 ? (
//             <>
//               {favoriteCountries.map((country) => {
//                 return (
//                   <div className="d-flex mb-3 align-items-center">
//                     <img src={country.flags.svg} alt="" />
//                     <div
//                       className="favorite-country-name  ps-2 text-truncate"
//                       title="iceland"
//                     >
//                       {country.name.common}
//                     </div>
//                     <div className="ms-auto">
//                       <TfiClose className="close-icon" onClick={()=>handelDeleteFavorite(country)}/>
//                     </div>
//                   </div>
//                 );
//               })}
//             </>
//           ) : (
//             <h2></h2>
//           )}
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default FavoriteCountries;
// import "./favorite-countries.css";

// import React, { useState, useEffect } from 'react';
// import { TfiClose } from 'react-icons/tfi'; 
// import { useDrop } from 'react-dnd'; 
// const FavoriteCountryList = ({ favoriteCountries, handelDeleteFavorite }) => {
//   return (
//     <div className="favorite-countries">
//       {favoriteCountries.length > 0 ? (
//         favoriteCountries.map((country) => (
//           <div className="d-flex mb-3 align-items-center" key={country.name.common}>
//             <img src={country.flags.svg} alt="" />
//             <div className="favorite-country-name ps-2 text-truncate" title={country.name.common}>
//               {country.name.common}
//             </div>
//             <div className="ms-auto">
//               <TfiClose className="close-icon" onClick={() => handelDeleteFavorite(country)} />
//             </div>
//           </div>
//         ))
//       ) : (
//         <h2>No favorite countries yet</h2>
//       )}
//     </div>
//   );
// };

// // Container Component
// const FavoriteCountries = () => {
//   const storedFavoriteCountries = JSON.parse(localStorage.getItem("storedFavoriteCountries")) || [];
//   const [favoriteCountries, setFavoriteCountries] = useState(storedFavoriteCountries);

//   useEffect(() => {
//     localStorage.setItem("storedFavoriteCountries", JSON.stringify(favoriteCountries));
//   }, [favoriteCountries]);

//   const handelDeleteFavorite = (countryToDelete) => {
//     const updatedFavoriteCountries = favoriteCountries.filter(
//       (country) => country.name.common !== countryToDelete.name.common
//     );
//     setFavoriteCountries(updatedFavoriteCountries);
//   };

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "div",
//     drop: (item) => addCountryToFavorite(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver,
//     }),
//   }));

//   const addCountryToFavorite = (country) => {
//     const storedFavoriteCountries = JSON.parse(localStorage.getItem("storedFavoriteCountries")) || [];
//     const index = storedFavoriteCountries.findIndex((favorite) => favorite.name.common === country.name.common);
//     if (index === -1) {
//       setFavoriteCountries((prevFavoriteCountries) => [
//         ...prevFavoriteCountries,
//         country,
//       ]);
//     }
//   };

//   return (
//     <aside className="favorites col-3 pe-1">
//       <div className="card p-3">
//         <h2 className="fw-bold">Favorites</h2>
//         <div className="favorite-countries" ref={drop}>
//           <FavoriteCountryList favoriteCountries={favoriteCountries} handelDeleteFavorite={handelDeleteFavorite} />
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default FavoriteCountries;

// import React, { useEffect, useReducer } from 'react';
// import { TfiClose } from 'react-icons/tfi';
// import { useDrop } from 'react-dnd';


// const initialState = {
//   favoriteCountries: JSON.parse(localStorage.getItem('storedFavoriteCountries')) || [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_COUNTRY':
//       const index = state.favoriteCountries.findIndex(
//         (favorite) => favorite.name.common === action.payload.name.common
//       );
//       if (index === -1) {
//         return { ...state, favoriteCountries: [...state.favoriteCountries, action.payload] };
//       }
//       return state;

//     case 'DELETE_COUNTRY':
//       const updatedFavoriteCountries = state.favoriteCountries.filter(
//         (country) => country.name.common !== action.payload.name.common
//       );
//       return { ...state, favoriteCountries: updatedFavoriteCountries };

//     default:
//       return state;
//   }
// };

// const FavoriteCountryList = ({ favoriteCountries, handelDeleteFavorite }) => {
//   return (
//     <div className="favorite-countries">
//       {favoriteCountries.length > 0 ? (
//         favoriteCountries.map((country) => (
//           <div className="d-flex mb-3 align-items-center" key={country.name.common}>
//             <img src={country.flags.svg} alt="" />
//             <div className="favorite-country-name ps-2 text-truncate" title={country.name.common}>
//               {country.name.common}
//             </div>
//             <div className="ms-auto">
//               <TfiClose className="close-icon" onClick={() => handelDeleteFavorite(country)} />
//             </div>
//           </div>
//         ))
//       ) : (
//         <h2>No favorite countries yet</h2>
//       )}
//     </div>
//   );
// };

// const FavoriteCountries = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     localStorage.setItem('storedFavoriteCountries', JSON.stringify(state.favoriteCountries));
//   }, [state.favoriteCountries]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: 'div',
//     drop: (item) => addCountryToFavorite(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver,
//     }),
//   }));

//   const addCountryToFavorite = (country) => {
//     dispatch({ type: 'ADD_COUNTRY', payload: country });
//   };

//   const handelDeleteFavorite = (countryToDelete) => {
//     dispatch({ type: 'DELETE_COUNTRY', payload: countryToDelete });
//   };

//   return (
//     <aside className="favorites col-3 pe-1">
//       <div className="card p-3">
//         <h2 className="fw-bold">Favorites</h2>
//         <div className="favorite-countries" ref={drop}>
//           <FavoriteCountryList
//             favoriteCountries={state.favoriteCountries}
//             handelDeleteFavorite={handelDeleteFavorite}
//           />
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default FavoriteCountries;
import "./favorite-countries.css"
import React, { useContext, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { FavoriteStateContext, FavoriteDispatchContext } from '../../../favorite-context/FavoriteProvider.jsx';
import { TfiClose } from 'react-icons/tfi';

const FavoriteCountries = () => {
  const {favoriteCountries} = useContext(FavoriteStateContext);
  const dispatch = useContext(FavoriteDispatchContext);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => addCountryToFavorite(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  }));

  const addCountryToFavorite = (country) => {
    dispatch({ type: 'ADD_COUNTRY', payload: country });
  };
  const handleDeleteFavorite = (countryToDelete) => {
    dispatch({ type: 'DELETE_COUNTRY', payload: countryToDelete });
  };
useEffect(()=>{

},[favoriteCountries])

  return (
    <aside className="favorites col-3 pe-1">
    <div className="card p-3">
      <h2 className="fw-bold">Favorites</h2>
      <div className="favorite-countries" ref={drop}>
        {favoriteCountries.length > 0 ? (
          favoriteCountries.map((country) => (
            <div className="d-flex mb-3 align-items-center" key={country.name.common}>
              <img src={country.flags.svg} alt="" />
              <div className="favorite-country-name ps-2 text-truncate" title={country.name.common}>
                {country.name.common}
              </div>
              <div className="ms-auto">
             <TfiClose className="close-icon" onClick={() => handleDeleteFavorite(country)} />
            </div>
            </div>
          ))
        ) : (
          <h2>No favorite countries yet</h2>
        )}
      </div>
    </div>
  </aside>
  );
};

export default FavoriteCountries;
