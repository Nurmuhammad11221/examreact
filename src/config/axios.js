import axios from "axios";

const api = axios.create({
  // URL oxirida slash bo'lsa, uni olib tashlagan ma'qul
  baseURL: "https://dummyjson.com" 
});

export default api;