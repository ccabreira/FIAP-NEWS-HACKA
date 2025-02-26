import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await registerUser(name, email, password);

      if (response?.user) {
        navigate("/"); 
    } else {
      setError("Erro ao registrar. Tente novamente.");
    }
  } catch (err) {
    setError("Erro ao tentar registrar.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="register-container" style={styles.container}>
      <form onSubmit={handleRegister} style={styles.form}>
        <label style={styles.label}>NOME</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>E-MAIL</label>
        <input
          type="email"
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
          {loading ? "Registrando..." : "REGISTRAR"}
        </button>

        {error && <p style={styles.error}>{error}</p>}
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
};
