import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getMetrics = async () => {
  const response = await api.get("/metrics");
  return response.data;
};

export default api;