import axios from "axios";

const api = axios.create({
  baseURL: "https://fiap-news-api.onrender.com/api", // Certifique-se de que esta é a URL correta
});

export default api;

export const fetchNews = async () => {
  try {
    const response = await api.get("/news");
    return response.data; // Adicionando await para garantir o retorno correto
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return []; // Retorna array vazio para evitar erro na Home
  }
};

export const fetchNewsById = async (id) => {
  try {
    const response = await api.get(`/news/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return null;
  }
};

