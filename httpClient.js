import axios from 'axios';
import { API_BASE_URL } from 'lib/const';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

const getToken = () => {
  try {
    const user = JSON.parse(window.localStorage.getItem('user'));
    return user?.token;
  } catch (error) {
    return null;
  }
};

httpClient.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json';
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpClient;
