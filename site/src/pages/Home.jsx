// src/pages/Home.jsx - Página principal com a lista de notícias
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNews } from "../services/api";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };
    loadNews();
  }, []);

  return (
    <div>
      <h1>Últimas Notícias</h1>
      {news.length > 0 ? (
        news.map((item) => <NewsCard key={item._id} news={item} />)
      ) : (
        <p>Carregando notícias...</p>
      )}
    </div>
  );
};

export default Home;