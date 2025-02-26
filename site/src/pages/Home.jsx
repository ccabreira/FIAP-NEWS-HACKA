import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";

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
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Últimas Notícias</h2>
      <div style={styles.newsGrid}>
        {news.length > 0 ? (
          news.map((item) => (
            <Card key={item._id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={`/news/${item._id}`} style={styles.link}>Saiba Mais</Link>
            </Card>
          ))
        ) : (
          <p style={styles.noNews}>Nenhuma notícia disponível.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    color: "#E6005A",
    padding: "20px",
    backgroundColor: "#1A001F",
    minHeight: "100vh",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  link: {
    color: "#E6005A",
    textDecoration: "none",
    fontWeight: "bold",
  },
  noNews: {
    fontSize: "18px",
  },
};
