import axios from 'axios';
import { request } from "./base-api.js";

const baseURL = 'https://restcountries.com/v3.1/';
//  const fetchAllCountries = async(url) => {
//  return fetch().then((response)=>{

//  })
 
//  axios
//     .get(`${baseURL}${url}`)
   
// };
const fetchAllCountries = async (url) => {
 return fetch(`${baseURL}${url}`).then((response)=>{
    return response.json();
 })
 .catch((error)=>{
    throw error
 })
};
const fetchCountriesByName = (url,setListOfCountries, setErrorMessage) => {
    axios
    .get(`${baseURL}${url}`)
    .then(function (response) {
      setListOfCountries(response.data);
      setErrorMessage("");

    })
    .catch(function (error) {
      setErrorMessage("Error fetching countries");
      console.log(error);
    });
  };

export  {fetchAllCountries,fetchCountriesByName}