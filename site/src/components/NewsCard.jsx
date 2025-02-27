// src/components/NewsCard.jsx - Componente para exibir cada notícia
import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.category}</p>
      <Link to={`/news/${news._id}`}>Leia mais</Link>
    </div>
  );
};

export default NewsCard;

