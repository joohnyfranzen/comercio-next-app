import axios from "axios";

const api = axios.create({
  baseURL: "http://www.moveis-eliane.com/api",
});

export default api;
