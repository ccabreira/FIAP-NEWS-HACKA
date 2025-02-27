import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchNews } from "../services/api";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.header}>Últimas Notícias</h1>
      {loading ? (
        <p style={styles.loading}>Carregando notícias...</p>
      ) : news.length > 0 ? (
        <div style={styles.newsList}>
          {news.map((item) => (
            <div key={item._id} style={styles.newsCard}>
              <h2>{item.title}</h2>
              <p style={styles.category}>{item.category}</p>
              <Link to={`/news/${item._id}`} style={styles.readMore}>Leia mais</Link>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noNews}>Nenhuma notícia disponível.</p>
      )}
    </div>
  );
}


const styles = {
  container: {
    backgroundColor: "#0c0c0c",
    minHeight: "100vh",
    color: "#ffffff",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "32px",
    color: "#E6005A",
    fontWeight: "bold",
  },
  loading: {
    fontSize: "18px",
    color: "#E6005A",
  },
  error: {
    fontSize: "18px",
    color: "#ff4c4c",
  },
  newsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  newsCard: {
    backgroundColor: "#1a1a1a",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    textAlign: "left",
  },
  category: {
    color: "#E6005A",
    fontWeight: "bold",
  },
  readMore: {
    color: "#E6005A",
    textDecoration: "none",
    fontSize: "16px",
    marginTop: "10px",
    display: "block",
  },
};


