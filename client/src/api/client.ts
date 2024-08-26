import axios from "axios";

const client = axios.create({ baseURL: process.env.API_HOST });
client.defaults.headers.common[
  "Authorization"
] = `bearer ${process.env.API_TOKEN}`;

export default client;
