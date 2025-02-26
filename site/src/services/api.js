const API_URL = "https://fiap-news-api.onrender.com/api";

// 🔹 Login do usuário
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro no login:", data.error);
      return null;
    }

    return {
      token: data.token,
      isAdmin: data.isAdmin || false, // Adiciona um campo para verificar admin
    };
  } catch (error) {
    console.error("Erro ao tentar fazer login:", error);
    return null;
  }
};

// 🔹 Cadastro do usuário
export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error("Erro ao registrar usuário.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no registro:", error);
    return { error: "Erro ao registrar usuário." };
  }
};

// 🔹 Buscar todas as notícias
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

// 🔹 Buscar notícia por ID
export const getNewsById = async (id) => {
  try {
    console.log("Buscando notícia com ID:", id); // LOG PARA DEBUG

    const response = await fetch(`${API_URL}/news/${id}`);
    
    if (!response.ok) {
      console.error("Erro ao buscar notícia:", response.status, response.statusText);
      throw new Error("Notícia não encontrada.");
    }

    const data = await response.json();
    console.log("Notícia recebida:", data); // LOG PARA DEBUG
    return data;
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    return null;
  }
};

// 🔹 Criar uma nova notícia (agora recebe um objeto único)
export const createNews = async (newsData) => {
  try {
    const response = await fetch(`${API_URL}/news`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newsData),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar notícia.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao criar notícia:", error);
    return { error: "Erro ao criar notícia." };
  }
};

// 🔹 Atualizar uma notícia existente (também recebe um objeto único)
export const updateNews = async (id, newsData) => {
  try {
    const response = await fetch(`${API_URL}/news/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newsData),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar notícia.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar notícia:", error);
    return { error: "Erro ao atualizar notícia." };
  }
};

// 🔹 Deletar uma notícia
export const deleteNews = async (id) => {
  try {
    const response = await fetch(`${API_URL}/news/${id}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Erro ao excluir notícia.");
    }

    return { message: "Notícia excluída com sucesso." };
  } catch (error) {
    console.error("Erro ao excluir notícia:", error);
    return { error: "Erro ao excluir notícia." };
  }
};
