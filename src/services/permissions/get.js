import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllPermissions = () => {
  return axios.get(`${baseUrl}/permissions/many`);
};
