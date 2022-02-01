import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllLocations = () => {
  return axios.get(`${baseUrl}/locations/many`);
};
