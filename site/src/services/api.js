// src/services/api.js - Requisições à API do backend
const API_URL = "https://fiap-news-api.onrender.com/api/news";

export const fetchNews = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

export const fetchNewsById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return null;
  }
};
