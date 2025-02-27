import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await api.get(`/news/${id}`);
        if (!response.data) {
          setError("Notícia não encontrada!");
          return;
        }
        setNewsItem(response.data);
      } catch (err) {
        setError("Erro ao carregar a notícia.");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{newsItem.title}</h1>
      <p style={styles.category}>Categoria: {newsItem.category}</p>
      <p style={styles.author}>Por {newsItem.author}</p>
      <p style={styles.content}>{newsItem.content}</p>
      <button onClick={() => navigate("/")} style={styles.backButton}>Voltar</button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0c0c0c",
    color: "#ffffff",
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center"
  },
  title: { fontSize: "28px", color: "#E6005A" },
  category: { fontSize: "18px", fontWeight: "bold", marginTop: "10px" },
  author: { fontSize: "16px", color: "#aaa" },
  content: { fontSize: "18px", marginTop: "20px", textAlign: "justify" },
  backButton: {
    marginTop: "20px",
    backgroundColor: "#E6005A",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  }
};
