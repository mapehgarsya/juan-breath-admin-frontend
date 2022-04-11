import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const putOneLocation = (data, id) => {
  return axios.put(`${baseUrl}/locations/${id}`, data);
};
