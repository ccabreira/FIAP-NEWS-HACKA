import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsById } from "../services/newsService";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`https://fiap-news-api.onrender.com/news/${id}`);
        if (!response.ok) throw new Error("Notícia não encontrada.");

        const data = await response.json();
        setNewsItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [id]);

  return (
    <div style={styles.container}>
      {loading && <p>Carregando...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {newsItem && (
        <>
          <h1 style={styles.title}>{newsItem.title}</h1>
          <p><strong>Categoria:</strong> {newsItem.category}</p>
          <p><strong>Autor:</strong> {newsItem.author || "Desconhecido"}</p>
          <p style={styles.text}>{newsItem.content}</p>
          <button onClick={() => navigate("/")} style={styles.backButton}>
            Voltar para Home
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#2b0032",
    color: "#fff",
  },
  title: {
    fontSize: "24px",
    color: "#E6005A",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.5",
  },
  backButton: {
    marginTop: "20px",
    background: "#E6005A",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
};
