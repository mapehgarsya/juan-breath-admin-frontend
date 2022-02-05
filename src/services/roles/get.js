import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllRoles = () => {
  return axios.get(`${baseUrl}/roles/many`);
};
