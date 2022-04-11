import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const deleteOneLocations = (id) => {
  return axios.delete(`${baseUrl}/locations/${id}`);
};
