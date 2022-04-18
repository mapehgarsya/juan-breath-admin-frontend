import axios from 'axios';
import  { baseUrl } from "../baseUrl";

export const forgotPassword = (data) => {
  return axios.post(`${baseUrl}/auth/password/forgot`, data);
};
