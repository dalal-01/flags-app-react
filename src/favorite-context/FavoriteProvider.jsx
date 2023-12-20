import React, { createContext, useContext, useReducer, useEffect } from 'react';

export const FavoriteStateContext = createContext();
export const FavoriteDispatchContext = createContext();

const initialState = {
  favoriteCountries: JSON.parse(localStorage.getItem('storedFavoriteCountries')) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY':
      const index = state.favoriteCountries.findIndex(
        (favorite) => favorite.name.common === action.payload.name.common
      );
      if (index === -1) {
        return { ...state, favoriteCountries: [...state.favoriteCountries, action.payload] };
      }
      return state;

    case 'DELETE_COUNTRY':
      const updatedFavoriteCountries = state.favoriteCountries.filter(
        (country) => country.name.common !== action.payload.name.common
      );
      return { ...state, favoriteCountries: updatedFavoriteCountries };

    default:
      return state;
  }
};

const getInitialState = () => {
  const storedCountries = JSON.parse(localStorage.getItem('storedFavoriteCountries')) || [];
  return {
    favoriteCountries: storedCountries,
  };
};
export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState,getInitialState);

  useEffect(() => {
    localStorage.setItem('storedFavoriteCountries', JSON.stringify(state.favoriteCountries));
  }, [state.favoriteCountries]);

  return (
    <FavoriteStateContext.Provider value={state}>
      <FavoriteDispatchContext.Provider value={dispatch}>
        {children}
      </FavoriteDispatchContext.Provider>
    </FavoriteStateContext.Provider>
  );
};

export const useTasksState = () => useContext(FavoriteStateContext);
export const useTasksDispatch = () => useContext(FavoriteDispatchContext);
