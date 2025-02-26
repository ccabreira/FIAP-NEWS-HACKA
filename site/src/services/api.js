const API_URL = "https://fiap-news-api.onrender.com/api";

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
    console.log("Buscando notícias de:", API_URL);
    const response = await fetch(`${API_URL}/news`);
    
    if (!response.ok) {
      console.error("Erro ao buscar notícias:", response.status, response.statusText);
      throw new Error("Erro ao buscar notícias");
    }

    const data = await response.json();
    console.log("Notícias recebidas:", data);
    return data;
  } catch (error) {
    console.error("Erro ao carregar notícias:", error);
    return [];
  }
};

export const getNewsById = async (id) => {
  const response = await fetch(`${API_URL}/news/${id}`);
  return response.json();
};

export const createNews = async (title, content, category, author) => {
  const response = await fetch(`${API_URL}/news`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, category, author }),
  });
  return response.json();
};

export const updateNews = async (id, title, content, category, author) => {
  const response = await fetch(`${API_URL}/news/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, category, author }),
  });
  return response.json();
};

export const deleteNews = async (id) => {
  await fetch(`${API_URL}/news/${id}`, { method: "DELETE" });
};


