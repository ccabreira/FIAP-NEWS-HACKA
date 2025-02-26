import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reseta erro ao tentar novamente

    try {
      const response = await registerUser(form.name, form.email, form.password);

      if (!response || response.error) {
        throw new Error(response?.error || "Erro ao registrar usuário.");
      }

      alert("Registro bem-sucedido! Redirecionando para o login.");
      navigate("/login");
    } catch (err) {
      console.error("Erro no registro:", err);
      setError(err.message || "Erro desconhecido ao registrar.");
    }
  };

  return (
    <div>
      <h1>Registrar</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Registrar</button>
      </form>
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
  );
}

export default Register;
