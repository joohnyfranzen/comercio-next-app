import axios from "axios";

const api = axios.create({
  baseURL: "http://moveis-eliane.com/api",
});

export default api;
