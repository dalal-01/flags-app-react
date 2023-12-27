import request from "./request.js";
const baseURL = "https://restcountries.com/v3.1/";

const fetchAllCountries = async() => {
 let res= await request(`${baseURL}/all`);
 return res
};

let latestRequest=0;
const fetchCountriesByName =async (countryName) => {
  let currentRequest=Date.now()
  latestRequest=currentRequest;
  let res= await request(`${baseURL}name/${countryName}`);
  if(latestRequest==currentRequest)
      return res     
};
const fetchCountriesByCommonName = async(countryName) => {
  return await request(`${baseURL}name/${countryName}?fullText=true`);
};

export { fetchAllCountries, fetchCountriesByName, fetchCountriesByCommonName };
