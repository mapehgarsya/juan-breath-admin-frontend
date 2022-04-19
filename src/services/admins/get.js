import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllAdmins = () => {
  return axios.get(`${baseUrl}/admins/many`);
};

// get one admin data
export const getOneAdmin = (id) => {
  return axios.get(`${baseUrl}/admins/${id}`);
};

// get all statistics
export const getAllStatistics = () => {
  return axios.get(`${baseUrl}/statistics/all`);
};
