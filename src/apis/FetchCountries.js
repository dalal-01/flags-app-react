import request from "./request.js";
const baseURL = "https://restcountries.com/v3.1/";


const fetchAllCountries = async () => {
  try {
    const res = await request(`${baseURL}/all`);
    return res || null; 
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch countries'); 
  }
};
let latestRequest = 0;

const fetchCountriesByName = async (countryName) => {
  let currentRequest = Date.now();
  latestRequest = currentRequest;
  try {
    let res = await request(`${baseURL}name/${countryName}`);
    if (latestRequest === currentRequest) {
      return res;
    }
  } catch (error) {
    throw new Error("Failed to fetch countries by name");
  }
};
const fetchCountriesByCommonName = async (countryName) => {
  try {
    const res = await request(`${baseURL}name/${countryName}?fullText=true`);
    console.log("🚀 ~ file: FetchCountries.js:32 ~ fetchCountriesByCommonName ~ res:", res)

    return res || null;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch countries by common name');
  }
};

// const fetchCountriesByCommonName = async(countryName) => {
//   return await request(`${baseURL}name/${countryName}?fullText=true`);
// };

export { fetchAllCountries, fetchCountriesByName, fetchCountriesByCommonName };
