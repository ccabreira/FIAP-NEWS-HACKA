import { useState, useEffect } from "react";
import { getNewsById, updateNews } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", category: "", author: "", image: "", content: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    getNewsById(id)
      .then((data) => setForm(data))
      .catch(() => setError("Erro ao carregar notícia."));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNews(id, form);
      navigate("/admin"); // Redireciona após edição
    } catch (err) {
      setError("Erro ao atualizar notícia.");
      console.error("Erro:", err);
    }
  };

  return (
    <div>
      <h2>📝 Editar Notícia</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={form.title} required onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input type="text" value={form.category} required onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <input type="text" value={form.author} required onChange={(e) => setForm({ ...form, author: e.target.value })} />
        <input type="text" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <textarea value={form.content} required onChange={(e) => setForm({ ...form, content: e.target.value })} />
        <button type="submit">Salvar</button>
        <button onClick={() => navigate("/admin")}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditNews;
