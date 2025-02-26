import { useState, useContext } from "react";
import { useAuth } from "../context/AuthContext"; // Import correto do contexto
import { loginUser } from "../services/api"; 
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Pega a função login do contexto
  const navigate = useNavigate(); // Redirecionamento pós-login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(email, password);
      if (token) {
        login(token);
        navigate("/news"); // Redireciona para a página de notícias após login
      } else {
        alert("Erro: Credenciais inválidas. Verifique seu e-mail e senha.");
      }
    } catch (error) {
      console.error("Erro ao tentar logar:", error);
      alert("Erro ao tentar logar. Tente novamente.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/">🔙 Voltar para Home</Link>
    </div>
  );
}

export default Login;


