import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3006"
      : "DEPLOYED_URL",
  timeout: 50000,
});

export default AxiosInstance;
