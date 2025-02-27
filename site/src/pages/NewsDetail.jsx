import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`https://fiap-news-api.onrender.com/api/news/${id}`);
        if (!response.ok) throw new Error("Notícia não encontrada.");

        const data = await response.json();
        setNewsItem(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNews();
  }, [id]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>Fiap News</header>
      {newsItem ? (
        <div style={styles.content}>
          <h1>{newsItem.title}</h1>
          <p><strong>Autor:</strong> {newsItem.author || "Desconhecido"}</p>
          <p><strong>Data:</strong> {newsItem.createdAt ? new Date(newsItem.createdAt).toLocaleDateString() : "Indisponível"}</p>
          <p><strong>Categoria:</strong> {newsItem.category}</p>
          <p>{newsItem.content}</p>
          <button onClick={() => navigate("/")} style={styles.backButton}>Voltar</button>
        </div>
      ) : (
        <p>Carregando notícia...</p>
      )}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px", backgroundColor: "#F4E1FF", minHeight: "100vh" },
  header: { backgroundColor: "#888", padding: "10px", fontSize: "20px", fontWeight: "bold" },
  content: { background: "#D8BFD8", padding: "20px", borderRadius: "8px", maxWidth: "600px", margin: "auto", textAlign: "left" },
  backButton: { marginTop: "20px", background: "#6A0DAD", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" },
};
