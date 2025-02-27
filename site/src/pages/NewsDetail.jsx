// src/pages/NewsDetail.jsx - Exibe detalhes da notícia
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";

const NewsDetail = () => {
  const { id } = useParams();
  const { news } = useContext(NewsContext);
  const newsItem = news.find((item) => item._id === id);

  if (!newsItem) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
      <p><strong>Autor:</strong> {newsItem.author}</p>
      <p><strong>Categoria:</strong> {newsItem.category}</p>
      <p><strong>Data:</strong> {new Date(newsItem.createdAt).toLocaleDateString()}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default NewsDetail;