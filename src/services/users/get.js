import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllUsers = () => {
  return axios.get(`${baseUrl}/users/many`);
};
