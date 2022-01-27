import axios from 'axios';
import { baseUrl } from 'services/baseUrl';

export const refresh = (refreshToken) => {
  const headers = {
    'Content-type': 'application/json',
    'Authorization': refreshToken
  }
  return axios.post(`${baseUrl}/auth/refresh-token`, headers);
}

