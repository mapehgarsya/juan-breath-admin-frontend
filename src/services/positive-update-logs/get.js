import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllPositiveLogs = () => {
  return axios.get(`${baseUrl}/public/positive-log/many`);
};

// get all location data
export const getAllCloseContact = (mobileNumber) => {
  return axios.get(`${baseUrl}/positive-log/close-contacts/${mobileNumber}`);
};

// get all location data
export const getAllInfectedVisitationHistroy = (mobileNumber) => {
  return axios.get(`${baseUrl}/positive-log/visitation-histroy/${mobileNumber}`);
};