import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://fiap-news-api.onrender.com/news");
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
    <div>
      <h1>Fiap News</h1>
      <div>
        {news.map((item) => (
          <div key={item._id}>
            <h3>{item.title}</h3>
            <p><strong>Categoria:</strong> {item.category}</p>
            <p>{item.content.substring(0, 100)}...</p>
            <Link to={`/news/${item._id}`}>Saiba mais</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
