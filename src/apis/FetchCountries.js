import axios from 'axios';
const baseURL = 'https://restcountries.com/v3.1/';

 const fetchAllCountries = (url) => {
  return axios.get(`${baseURL}/all`);
  
};

const fetchCountriesByName = (countryName) => {
  return axios.get(`${baseURL}name/${countryName}`);
};
const fetchCountriesByCommonName = (url) => {
  return axios.get(`${baseURL}${url}`);
};


export  {fetchAllCountries,fetchCountriesByName,fetchCountriesByCommonName}