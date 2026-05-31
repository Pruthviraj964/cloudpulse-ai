import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getAIAnalysis = async () => {
  const response = await api.get("/ai-analysis");
  return response.data;
};