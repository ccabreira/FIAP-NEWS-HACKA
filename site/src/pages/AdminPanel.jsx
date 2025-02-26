import { useEffect, useState } from "react";
import { getNews, deleteNews } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Usa o contexto de autenticação

const AdminPanel = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(""); // Estado para erros
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redireciona para login se não estiver autenticado
      return;
    }

    getNews()
      .then(setNews)
      .catch((err) => setError("Erro ao carregar notícias"))
      .finally(() => setLoading(false)); // Desativa o estado de carregamento
  }, [isAuthenticated, navigate]);

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir esta notícia?")) return;

    try {
      await deleteNews(id);
      setNews((prevNews) => prevNews.filter((n) => n._id !== id));
    } catch (err) {
      setError("Erro ao excluir notícia.");
      console.error("Erro ao excluir:", err);
    }
  };

  return (
    <div>
      <h2>Painel de Notícias</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <button onClick={() => navigate("/news/new")}>➕ Criar Nova Notícia</button>
          <ul>
            {news.length > 0 ? (
              news.map(({ _id, title }) => (
                <li key={_id}>
                  {title}
                  <button onClick={() => navigate(`/news/edit/${_id}`)}>✏️ Editar</button>
                  <button onClick={() => handleDelete(_id)}>🗑️ Excluir</button>
                </li>
              ))
            ) : (
              <p>Nenhuma notícia cadastrada.</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default AdminPanel;

