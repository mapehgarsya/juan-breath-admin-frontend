import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const putOneAdmin = (data, id) => {
  return axios.put(`${baseUrl}/admins/${id}`, data);
};
