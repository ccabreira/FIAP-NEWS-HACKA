import { useState, useContext } from "react";
import { useAuth } from "../context/AuthContext"; // Import correto do contexto
import { loginUser } from "../services/api"; 
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // Pega a função login do contexto
  const navigate = useNavigate(); // Redirecionamento pós-login

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await loginUser(email, password);
      
      if (response?.token) {
        localStorage.setItem("authToken", response.token);

        // 🔹 Se for admin, redireciona para o painel admin
        if (response.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/"); // Se não for admin, volta para home
        }
      } else {
        setError("Credenciais inválidas. Verifique seu e-mail e senha.");
      }
    } catch (err) {
      setError("Erro ao tentar fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <label style={styles.label}>USUÁRIO</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>SENHA</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Conectando..." : "CONECTAR"}
        </button>

        {error && <p style={styles.error}>{error}</p>}

        <p style={styles.forgotPassword}>ESQUECI MINHA SENHA</p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#2b0032",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "8px",
    background: "#400040",
    width: "300px",
    color: "#fff",
  },
  label: {
    fontSize: "12px",
    textTransform: "uppercase",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    color: "#000",
    background: "#f2f2f2",
  },
  button: {
    padding: "12px",
    background: "#e6005a",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "10px",
  },
  forgotPassword: {
    textAlign: "center",
    color: "#e6005a",
    fontSize: "14px",
    marginTop: "10px",
    cursor: "pointer",
  },
};



