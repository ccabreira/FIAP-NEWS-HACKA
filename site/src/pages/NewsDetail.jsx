import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NewsDetail() {
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

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {loading ? (
          <p style={styles.loading}>Carregando...</p>
        ) : error ? (
          <div style={styles.errorContainer}>
            <p>{error}</p>
            <button onClick={() => navigate("/")} style={styles.backButton}>
              Voltar para Home
            </button>
          </div>
        ) : (
          <div style={styles.content}>
            <h1 style={styles.title}>{newsItem.title}</h1>
            <p style={styles.text}>{newsItem.content}</p>
            <p style={styles.meta}>
              <strong>Autor:</strong> {newsItem.author || "Desconhecido"}
            </p>
            <p style={styles.meta}>
              <strong>Data:</strong>{" "}
              {newsItem.date ? new Date(newsItem.date).toLocaleDateString() : "Data indisponível"}
            </p>
            <button onClick={() => navigate("/")} style={styles.backButton}>
              Voltar para Home
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#2b0032",
    color: "#fff",
  },
  title: {
    fontSize: "24px",
    color: "#E6005A",
  },
  text: {
    fontSize: "16px",
    color: "#ddd",
    lineHeight: "1.5",
  },
  backButton: {
    background: "#E6005A",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
