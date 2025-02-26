import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(form.name, form.email, form.password);
    if (response.error) {
      setError("Erro ao registrar usuário.");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Registrar</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="E-mail" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Registrar</button>
      </form>
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
  );
}

export default Register;


