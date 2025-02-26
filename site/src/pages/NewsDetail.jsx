import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById } from "../services/api";
import { Link } from "react-router-dom";

function NewsDetail() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    getNewsById(id).then(setNewsItem);
  }, [id]);

  if (!newsItem) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
      {newsItem.image && <img src={newsItem.image} alt={newsItem.title} />}
      <p><strong>Autor:</strong> {newsItem.author}</p>
      <p><strong>Data:</strong> {new Date(newsItem.date).toLocaleDateString()}</p>
      <Link to="/">🔙 Voltar para Home</Link>
    </div>
  );
}

export default NewsDetail;

