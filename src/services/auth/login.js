import axios from 'axios';
import  { baseUrl } from "../baseUrl";

export const loginAdmin = (data) => {
  return axios.post(`${baseUrl}/auth/login`, data);
};
