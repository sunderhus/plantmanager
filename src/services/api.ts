import axios from 'axios';

const api = axios.create({
  baseUrl: `${process.env.REACT_APP_BASE_API_URL}:${process.env.REACT_APP_BASE_API_PORT}`,
});

export default api;
