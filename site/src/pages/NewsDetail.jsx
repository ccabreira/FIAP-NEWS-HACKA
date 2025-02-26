import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsById } from "../services/api";

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNewsById(id)
      .then(setNews)
      .catch((error) => console.error("Erro ao carregar notícia:", error));
  }, [id]);

  if (!news) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
  );
}

export default NewsDetail;

