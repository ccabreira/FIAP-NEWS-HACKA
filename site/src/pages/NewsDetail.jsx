import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById } from "../services/api";
import { Link } from "react-router-dom";

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNewsById(id);
        if (!data || data.error) {
          setError("Notícia não encontrada!");
        } else {
          setNewsItem(data);
        }
      } catch (err) {
        setError("Erro ao carregar a notícia.");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
      {newsItem.image && (
        <img
          src={`https://fiap-news-api.onrender.com/${newsItem.image}`}
          alt={newsItem.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
      <p><strong>Autor:</strong> {newsItem.author}</p>
      <p><strong>Data:</strong> {new Date(newsItem.date).toLocaleDateString()}</p>
      
      {/* Botão de voltar para Home */}
      <button onClick={() => navigate("/")}>🔙 Voltar para Home</button>
    </div>
  );
}

export default NewsDetail;