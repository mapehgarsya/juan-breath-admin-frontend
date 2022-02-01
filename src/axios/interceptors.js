import axios from 'axios';
import { baseUrl } from '../services/baseUrl';

export const refresh = (refreshToken) => {
  const headers = {
    'Content-type': 'application/json',
    'Authorization': refreshToken
  }
  return axios.post(`${baseUrl}/auth/refresh-token`, headers);
}

/** refresh access Token */
const refresher = async (refreshToken) => {
  try {
    const data = await refresh(refreshToken);

    return data.data.token;
  } catch (err) {
    if (err?.response?.status === 403) {
      window.location.replace('/login');
    }

    return null;
  }
};

/** modify axios configuration before request is made  */
const onRequest = (config) => {
  /** modify headers for axios request */

  const token = localStorage.getItem('accessToken');

  if (token) {
    config.headers.common['Authorization'] = token;
  }

  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

/** If response error is 403, fetch new access Token using refresh token on axios response interceptor */
const onResponseError = async (error) => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (error.response) {
    if (error.response.status === 403) {
      if (refreshToken) {
        const newToken = await refresher(refreshToken);

        if (newToken) {
          localStorage.setItem('accessToken', newToken);
        }
      }
    }
  }

  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance
) {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}