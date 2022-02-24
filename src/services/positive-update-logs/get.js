import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllPositiveLogs = () => {
  return axios.get(`${baseUrl}/public/positive-log/many`);
};
