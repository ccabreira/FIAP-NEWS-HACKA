import { useState } from "react";
import { createNews } from "../services/api";
import { useNavigate } from "react-router-dom";

const CreateNews = () => {
  const [form, setForm] = useState({ title: "", category: "", author: "", image: "", content: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNews(form);
      navigate("/admin"); // Redireciona para o painel após criar
    } catch (err) {
      setError("Erro ao criar notícia.");
      console.error("Erro:", err);
    }
  };

  return (
    <div>
      <h2>📰 Criar Nova Notícia</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" required onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input type="text" placeholder="Categoria" required onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <input type="text" placeholder="Autor" required onChange={(e) => setForm({ ...form, author: e.target.value })} />
        <input type="text" placeholder="Imagem (URL)" onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <textarea placeholder="Conteúdo" required onChange={(e) => setForm({ ...form, content: e.target.value })} />
        <button type="submit">Criar</button>
        <button onClick={() => navigate("/admin")}>Cancelar</button>
      </form>
    </div>
  );
};

export default CreateNews;
