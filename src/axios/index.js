import axios from "axios";
import { BASE_URL } from "../utils/constants";

const instance = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  axiosInstance.interceptors.response.use((response) => {
    return response;
  });

  return axiosInstance;
};

export default instance;
