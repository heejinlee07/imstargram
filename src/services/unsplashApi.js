import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export default unsplashApi;
