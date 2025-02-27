import axios from "axios";

const api = axios.create({
  baseURL: "https://fiap-news-hacka.onrender.com/api", // REMOVA o "/news"
});

export default api;

export const fetchNews = async () => {
  try {
    const response = await api.get("/news"); // Adicione "/news" aqui
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

export const fetchNewsById = async (id) => {
  try {
    const response = await api.get(`/news/${id}`); // Adicione "/news" aqui
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return null;
  }
};
