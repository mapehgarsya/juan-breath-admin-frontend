import axios from 'axios';
import  { baseUrl } from "../baseUrl";

export const resetPassword = (data) => {
  return axios.post(`${baseUrl}/auth/password/reset`, data);
};
