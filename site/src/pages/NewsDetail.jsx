import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getNewsById } from "../services/api";

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
        console.error("Erro ao buscar notícia:", err);
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

      {/* Verifica se há uma imagem válida, caso contrário exibe uma imagem padrão */}
      <img
        src={newsItem.image ? `https://fiap-news-api.onrender.com/${newsItem.image}` : "/placeholder-image.jpg"}
        alt={newsItem.title}
        style={{ maxWidth: "100%", height: "auto" }}
        onError={(e) => e.target.src = "/placeholder-image.jpg"}
      />

      <p><strong>Autor:</strong> {newsItem.author || "Desconhecido"}</p>
      <p><strong>Data:</strong> {newsItem.date ? new Date(newsItem.date).toLocaleDateString() : "Data indisponível"}</p>
      
      {/* Botão de voltar para Home */}
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
  );
}

export default NewsDetail;
