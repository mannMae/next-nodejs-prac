import { API_URL } from '@/configurations';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: API_URL,
});
