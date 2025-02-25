const API_URL = import.meta.env.VITE_API_URL;

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
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  return response.ok ? data : null;
};

export const getNews = async () => {
  const response = await fetch(`${API_URL}/news`);
  return response.json();
};

export const getNewsById = async (id) => {
  const response = await fetch(`${API_URL}/news/${id}`);
  return response.json();
};

