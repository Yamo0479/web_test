import axios from "axios";

const API = axios.create({
    baseURL:"https://localhost:4001",
    headers: {
      "Content-Type": "Application/json",
    },
    withCredentials: true,
});

export default API;