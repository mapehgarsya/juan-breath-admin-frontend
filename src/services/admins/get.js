import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllAdmins = () => {
  return axios.get(`${baseUrl}/admins/many`);
};
