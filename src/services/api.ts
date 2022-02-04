import axios from "axios";
import { API_KEY } from "../utils/constantes";

const api = axios.create({
  baseURL: "https://api.coincap.io/v2",
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
});

export default api;
