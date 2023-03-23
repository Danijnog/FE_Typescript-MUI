import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`, //vamos utilizar a URL basica do projeto interno que definimos na variavel de ambiente (.env)
  withCredentials: true
});