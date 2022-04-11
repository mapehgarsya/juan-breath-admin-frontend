import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const postOneLocation = (data) => {
  return axios.post(`${baseUrl}/locations`, data);
};
