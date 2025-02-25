export async function login(credentials) {
    const response = await fetch("https://seu-backend-api.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });
    return response.json();
  }
  
  export async function register(credentials) {
    const response = await fetch("https://seu-backend-api.com/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });
    return response.json();
  }