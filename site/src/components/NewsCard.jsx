import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ _id, title, content, image }) => {
  const imageUrl = image ? `https://fiap-news-api.onrender.com/${image}` : "/placeholder-image.jpg";

  return (
    <div className="news-card">
      {/* Exibição da imagem com fallback para uma imagem padrão */}
      <img 
        src={imageUrl} 
        alt={title} 
        style={{ maxWidth: "120px", height: "auto", borderRadius: "5px", marginBottom: "10px" }}
        onError={(e) => e.target.src = "/placeholder-image.jpg"} // Se a imagem quebrar, exibe uma imagem padrão
      />

      {/* Título da notícia */}
      <h2>{title}</h2>

      {/* Trecho do conteúdo da notícia */}
      <p>{content.length > 100 ? `${content.substring(0, 100)}...` : content}</p>

      {/* Link para acessar a notícia completa */}
      <Link to={`/news/${_id}`} style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
        Leia mais
      </Link>
    </div>
  );
};

export default NewsCard;
