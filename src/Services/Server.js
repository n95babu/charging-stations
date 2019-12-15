import axios from 'axios';


const locationURL = `https://places.sit.ls.hereapi.com/places/v1/autosuggest
?at=40.74917,-73.98529
&q=supercharger
&apikey=Cq8x7agBUkJkqGDRel3x6wrfgodx-bp6wX0uFNO-Mgs`

// Fetching location data;
export const fetchLocations = async () => {
  const response = await axios.get(locationURL);
  const data = response.data.results;
  console.log(data);
  return data;
}


export const fethRandomBathrooms = async (borough) => {
  // borough.charAt(0).toUpperCase() + borough.slice(1);
  const response = await axios.get(`https://data.cityofnewyork.us/resource/hjae-yuav.json?borough=${borough}`);
  const data = response.data;
  return data;
};