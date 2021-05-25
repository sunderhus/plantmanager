import axios from 'axios';
import { API_BASE_URL, API_PORT } from 'react-native-dotenv';

const api = axios.create({
  baseURL: `${API_BASE_URL}:${API_PORT}`,
});

export default api;
