import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '',
    timeout: 123,
    withCredentials: true,
});

export default axiosInstance