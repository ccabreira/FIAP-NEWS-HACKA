import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/NewsCard";
import "../styles/Home.css";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log("Buscando notícias...");
    getNews()
      .then((data) => {
        console.log("Notícias recebidas:", data);
        setNews(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar notícias:", error);
      });
  }, []);

  return (
    <div>
      <h1>Últimas Notícias</h1>
      <div className="news-grid">
        {news.length > 0 ? (
          news.map((n) => <NewsCard key={n._id} {...n} />)
        ) : (
          <p>Nenhuma notícia encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
