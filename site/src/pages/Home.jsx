import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import React from "react";

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
      <header style={styles.header}>
        <h1 style={styles.title}>
          <Link to="/" style={styles.link}>Fiap News</Link>
        </h1>
        <nav style={styles.nav}>
          <Link to="/login" style={styles.navLink}>Login</Link>
          <Link to="/register" style={styles.navLink}>Registrar</Link>
        </nav>
      </header>

      <main style={styles.newsContainer}>
        <h2 style={styles.sectionTitle}>Últimas Notícias</h2>
        <div style={styles.newsGrid}>
          {news.length > 0 ? (
            news.map((item) => (
              <div key={item._id} style={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={`/news/${item._id}`} style={styles.readMore}>Saiba mais</Link>
              </div>
            ))
          ) : (
            <p style={styles.noNews}>Nenhuma notícia disponível.</p>
          )}
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#2b0032",
    minHeight: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#1a001f",
    position: "fixed",
    top: 0,
    left: 0,
  },
  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },
  link: {
    color: "#e6005a",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#e6005a",
    textDecoration: "none",
    fontSize: "16px",
  },
  newsContainer: {
    marginTop: "80px",
    width: "80%",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    margin: "20px 0",
  },
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px"
  },
  card: {
    background: "#400040",
    padding: "15px",
    borderRadius: "8px",
    color: "#fff",
    textAlign: "left",
  },
  readMore: {
    color: "#E6005A",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "10px",
    display: "block",
  },
  noNews: {
    fontSize: "18px",
  }
};
