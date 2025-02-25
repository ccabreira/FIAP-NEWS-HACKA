import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await registerUser(name, email, password);
    if (success) navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Register;
