import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// delete on role
export const deleteOneRole = (id) => {
  return axios.delete(`${baseUrl}/roles/${id}`);
};
