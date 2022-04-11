import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const postOneAdmin = (data) => {
  return axios.post(`${baseUrl}/admins`, data);
};
