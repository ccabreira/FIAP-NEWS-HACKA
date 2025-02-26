import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/NewsCard";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
      .then((data) => {
        console.log("Dados recebidos da API:", data); // 👈 Adicione esse log
        if (data && data.length > 0) {
          setNews(data);
        } else {
          console.error("Erro: Nenhuma notícia retornada");
        }
      })
      .catch((error) => console.error("Erro ao buscar notícias:", error));
  }, []);
  

  return (
    <div>
      <h1>Últimas Notícias</h1>
      {news.length > 0 ? (
        news.map((item) => <NewsCard key={item._id} {...item} />)
      ) : (
        <p>Nenhuma notícia disponível.</p>
      )}
    </div>
  );
}

export default Home;

