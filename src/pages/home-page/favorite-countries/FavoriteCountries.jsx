
import "./favorite-countries.css"
import React, { useContext, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { FavoriteStateContext, FavoriteDispatchContext } from '../../../favorite-context/FavoriteProvider.jsx';
import { TfiClose } from 'react-icons/tfi';

const FavoriteCountries = () => {
  let [isDragOver,setIsDragOver]=useState(false)
  const {favoriteCountries} = useContext(FavoriteStateContext);
  const dispatch = useContext(FavoriteDispatchContext);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => addCountryToFavorite(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCountryToFavorite = (country) => {
    dispatch({ type: 'ADD_COUNTRY', payload: country });
  };
  const handleDeleteFavorite = (countryToDelete) => {
    dispatch({ type: 'DELETE_COUNTRY', payload: countryToDelete });
  };


const handelAddBorderColor=()=>{
  setIsDragOver(true)
}
const handelDeleteBorderColor=()=>{
  setIsDragOver(false)
}

  return (
    <aside className="favorites col-3 pe-1"   >
    <div className="card p-3" style={{ border: isDragOver ? "5px solid #27ae60" : "0px" }} >
      <h2 className="fw-bold">Favorites</h2>
      <div className="favorite-countries" ref={drop} onDragOver={handelAddBorderColor} onDragLeave={handelDeleteBorderColor} onDrop={handelDeleteBorderColor}  >
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