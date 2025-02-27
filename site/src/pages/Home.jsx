import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://fiap-news-api.onrender.com/api/news");
        if (!response.ok) throw new Error("Erro ao buscar notícias.");

        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>Fiap News</header>
      <h2>Últimas Notícias</h2>

      <div style={styles.newsGrid}>
        {news.length > 0 ? (
          news.map((item) => (
            <div key={item._id} style={styles.card}>
              <h3>{item.title}</h3>
              <Link to={`/news/${item._id}`} style={styles.readMore}>Leia Mais</Link>
            </div>
          ))
        ) : (
          <p>Nenhuma notícia disponível.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px", backgroundColor: "#F4E1FF", minHeight: "100vh" },
  header: { backgroundColor: "#888", padding: "10px", fontSize: "20px", fontWeight: "bold" },
  newsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" },
  card: { background: "#D8BFD8", padding: "15px", borderRadius: "8px" },
  readMore: { color: "#6A0DAD", textDecoration: "none", fontWeight: "bold", display: "block", marginTop: "10px" },
};
