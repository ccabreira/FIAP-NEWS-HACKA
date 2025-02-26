import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ _id, title, content, image }) => {
  const imageUrl = image ? `https://fiap-news-api.onrender.com/${image}` : null;

  return (
    <div className="news-card">
      {imageUrl && <img src={imageUrl} alt={title} style={{ maxWidth: "100px", height: "auto" }} />}
      <h2>{title}</h2>
      <p>{content.substring(0, 100)}...</p>
      <Link to={`/news/${_id}`}>📖 Leia mais</Link>
    </div>
  );
};

export default NewsCard;