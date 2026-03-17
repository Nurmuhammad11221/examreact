import axios from "axios";

const api = axios.create({
  baseURL: "https://e-commerce-api-v3.nt.azimumarov.uz/api/v1"
});

export default api;