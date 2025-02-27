import axios from "axios";

const API_URL = "https://fiap-news-api.onrender.com/api/news";

const api = axios.create({
  baseURL: API_URL,
});

export const fetchNews = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

export const fetchNewsById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return null;
  }
};

export default api;
