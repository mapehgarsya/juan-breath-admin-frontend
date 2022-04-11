import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const deleteOneAdmin = (id) => {
  return axios.delete(`${baseUrl}/admins/${id}`);
};
