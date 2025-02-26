import { useEffect, useState } from "react";
import { getNews, deleteNews } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Usa o contexto de autenticação

const AdminPanel = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const isAdmin = localStorage.getItem("isAdmin") === "true"; // 🔹 Verifica se o usuário é admin

    if (!token || !isAdmin) {
      navigate("/"); // 🔹 Se não for admin, redireciona para home
      return;
    }

    getNews()
      .then(setNews)
      .catch(() => setError("Erro ao carregar notícias"))
      .finally(() => setLoading(false));
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
    <div style={styles.container}>
      <h2 style={styles.title}>Painel de Notícias</h2>

      {error && <p style={styles.error}>{error}</p>}
      {loading ? (
        <p style={styles.loading}>Carregando...</p>
      ) : (
        <>
          <button onClick={() => navigate("/news/new")} style={styles.createButton}>
            ➕ Criar Nova Notícia
          </button>
          <ul style={styles.newsList}>
            {news.length > 0 ? (
              news.map(({ _id, title }) => (
                <li key={_id} style={styles.newsItem}>
                  {title}
                  <div>
                    <button onClick={() => navigate(`/news/edit/${_id}`)} style={styles.editButton}>
                      ✏️ Editar
                    </button>
                    <button onClick={() => handleDelete(_id)} style={styles.deleteButton}>
                      🗑️ Excluir
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p style={styles.noNews}>Nenhuma notícia cadastrada.</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "15px",
  },
  error: {
    color: "red",
    fontSize: "16px",
  },
  loading: {
    fontSize: "18px",
  },
  createButton: {
    padding: "10px",
    background: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  newsList: {
    listStyle: "none",
    padding: 0,
  },
  newsItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  editButton: {
    padding: "8px",
    marginRight: "5px",
    background: "#FFA500",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "8px",
    background: "#DC3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  noNews: {
    fontSize: "16px",
    color: "#555",
  },
};

export default AdminPanel;
