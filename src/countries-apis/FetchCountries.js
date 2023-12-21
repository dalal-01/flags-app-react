import axios from 'axios';
const baseURL = 'https://restcountries.com/v3.1/';

 const fetchAllCountries = (url) => {
  return axios.get(`${baseURL}${url}`);
};

const fetchCountriesByName = (url) => {
  return axios.get(`${baseURL}${url}`);
};
const fetchCountriesByCommonName = (url) => {
  return axios.get(`${baseURL}${url}`);
};


export  {fetchAllCountries,fetchCountriesByName,fetchCountriesByCommonName}