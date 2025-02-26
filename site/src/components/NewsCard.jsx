import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ _id, title, content }) => {
  return (
    <div className="news-card" style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", textAlign: "center", width: "250px" }}>
      {/* Título da notícia */}
      <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>{title}</h2>

      {/* Trecho do conteúdo da notícia */}
      <p style={{ fontSize: "14px", color: "#555" }}>
        {content.length > 100 ? `${content.substring(0, 100)}...` : content}
      </p>

      {/* Link para acessar a notícia completa */}
      <Link
        to={`/news/${_id}`}
        style={{ textDecoration: "none", color: "#007BFF", fontWeight: "bold", fontSize: "14px" }}
        aria-label={`Leia mais sobre: ${title}`}
      >
        Leia mais
      </Link>
    </div>
  );
};

export default NewsCard;


