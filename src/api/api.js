import axios from "axios";

const api = axios.create({
    baseURL: "https://64edc9d41f8721827141bcbf.mockapi.io"
});

export default api;