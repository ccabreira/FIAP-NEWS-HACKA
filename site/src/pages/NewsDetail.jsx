import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
        console.log(`Buscando notícia com ID: ${id}`);
        const data = await getNewsById(id);
        console.log("Resposta da API:", data);

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

  if (loading) return <p style={{ textAlign: "center", fontSize: "18px" }}>Carregando...</p>;
  if (error) return (
    <div style={{ textAlign: "center", color: "red", fontSize: "18px" }}>
      <p>{error}</p>
      <button onClick={() => navigate("/")} style={{ background: "#007BFF", color: "white", padding: "8px 12px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Voltar para Home
      </button>
    </div>
  );

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{newsItem.title}</h1>
      <p style={{ fontSize: "16px", color: "#555" }}>{newsItem.content}</p>

      <p style={{ marginTop: "10px" }}><strong>Autor:</strong> {newsItem.author || "Desconhecido"}</p>
      <p><strong>Data:</strong> {newsItem.date ? new Date(newsItem.date).toLocaleDateString() : "Data indisponível"}</p>
      
      <button 
        onClick={() => navigate("/")} 
        style={{ background: "#007BFF", color: "white", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "15px" }}
      >
        Voltar para Home
      </button>
    </div>
  );
}

export default NewsDetail;

