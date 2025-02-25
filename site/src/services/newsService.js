export async function fetchNews() {
    const response = await fetch("https://seu-backend-api.com/noticias");
    return response.json();
  }