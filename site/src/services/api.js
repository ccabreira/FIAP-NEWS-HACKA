// services/api.js
const API_URL = import.meta.env.VITE_API_URL || "https://fiap-news-api.onrender.com";

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return response.ok ? data.token : null;
};

export const registerUser = async (name, email, password) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
};

export const getNews = async () => {
  try {
    const response = await fetch(`${API_URL}/news`);
    if (!response.ok) throw new Error("Erro ao buscar notícias");
    return await response.json();
  } catch (error) {
    console.error("Erro ao carregar notícias:", error);
    return [];
  }
};
export const getNewsById = async (id) => {
  const response = await fetch(`${API_URL}/news/${id}`);
  return response.json();
};

