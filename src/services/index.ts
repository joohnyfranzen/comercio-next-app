import axios from "axios";

const api = axios.create({
  baseURL: "https://www.moveis-eliane.com/api",
});

export default api;
