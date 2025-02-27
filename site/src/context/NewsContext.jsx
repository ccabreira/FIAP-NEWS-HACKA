// src/context/NewsContext.jsx - Contexto para armazenar notícias
import React, { createContext, useState, useEffect } from "react";
import { fetchNews } from "../services/api";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };
    loadNews();
  }, []);

  return <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>;
};