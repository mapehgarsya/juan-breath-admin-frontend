import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const postOneRole = (data) => {
  return axios.post(`${baseUrl}/roles`, data);
};
