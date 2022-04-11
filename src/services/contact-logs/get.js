import axios from 'axios';
import  { baseUrl } from "../baseUrl";

// get all location data
export const getAllVisitationLogs = () => {
  return axios.get(`${baseUrl}/admin/visitation-history/many`);
};
