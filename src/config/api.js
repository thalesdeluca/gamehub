import axios from "axios";

const api = axios.create({
  baseUrl: "http://159.89.48.179/gamehub/"
})

export default api;