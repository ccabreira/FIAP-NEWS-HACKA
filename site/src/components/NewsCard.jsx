import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ _id, title, content, image }) => {
  // Corrigir a exibição da imagem
  const imageUrl = image && !image.includes("http")
    ? `https://fiap-news-api.onrender.com/${image}`
    : image; 

  return (
    <div className="news-card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2>{title}</h2>
      <p>{content.length > 100 ? `${content.substring(0, 100)}...` : content}</p>
      <Link to={`/news/${_id}`}>📖 Leia mais</Link>
    </div>
  );
};

export default NewsCard;
