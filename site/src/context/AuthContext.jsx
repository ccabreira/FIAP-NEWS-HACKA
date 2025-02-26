import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 🔹 Verifica o token no localStorage ao carregar a aplicação
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("authToken");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser)); // Converte de string para objeto
    }
  }, []);

  // 🔹 Login: Salva usuário e token
  const login = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("authToken", token);
    setUser(userData);

    // 🔹 Redireciona com base no tipo de usuário
    if (userData.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

    // 🔹 Redireciona para AdminPanel se for admin, senão para Home
    if (userData.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  // 🔹 Logout: Remove informações
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;


