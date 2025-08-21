import axios from 'axios';

const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_HOST });
client.defaults.headers.common['Authorization'] =
  `Bearer ${process.env.API_TOKEN}`;
client.defaults.headers.common['Strapi-Response-Format'] =
  `v4`;

export default client;
