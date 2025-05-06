import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export function setAuthToken(token) {
  if (token)
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else
    delete api.defaults.headers.common["Authorization"];
}