import { useEffect, useState } from "react";
import Card from "../ui/Card";

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
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.description}</p>
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
    minHeight: "100vh"
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px"
  },
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px"
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  cardText: {
    fontSize: "14px"
  },
  noNews: {
    fontSize: "18px",
    color: "#ffffff"
  }
};
