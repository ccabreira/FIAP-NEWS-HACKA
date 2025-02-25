// src/components/NewsCard.jsx
import React from 'react';

import { Link } from "react-router-dom";

const NewsCard = ({ _id, title, content, image }) => (
  <div className="news-card">
    {image && <img src={image} alt={title} />}
    <h2>{title}</h2>
    <p>{content.substring(0, 100)}...</p>
    <Link to={`/news/${_id}`}>Leia mais</Link>
  </div>
);

export default NewsCard;
