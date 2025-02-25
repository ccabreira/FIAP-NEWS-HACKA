const API_URL = import.meta.env.VITE_API_URL;

export const getNews = async () => {
  const response = await fetch(`${API_URL}/news`);
  return response.json();
};

export const getNewsById = async (id) => {  // <== Verifique se esta função está presente
  const response = await fetch(`${API_URL}/news/${id}`);
  return response.json();
};

export const registerUser = async (userData) => { // <== Verifique se esta função está presente
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return response.ok ? data : null;
};

