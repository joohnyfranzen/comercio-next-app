import axios from "axios";

const api = axios.create({
  baseURL: "http://moveis-eliane/api",
});

export default api;
