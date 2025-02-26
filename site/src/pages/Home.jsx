import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/NewsCard";
import "./styles/Home.css";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Últimas Notícias</h1>
      <div className="news-grid">
        {news.length > 0 ? (
          news.map((item) => <NewsCard key={item._id} {...item} />)
        ) : (
          <p>Nenhuma notícia disponível.</p>
        )}
      </div>
    </div>
  );
}

export default Home;


