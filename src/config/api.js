import axios from "axios";

const api = axios.create({
  baseURL: "http://159.89.48.179/jokenpo"
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@gamehub-token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }

  return config

})

export default api;