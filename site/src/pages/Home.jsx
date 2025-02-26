import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/NewsCard";
import "../styles/Home.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
        {/* Aqui deve vir a listagem das notícias */}
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
};
