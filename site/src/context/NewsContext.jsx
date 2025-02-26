import { createContext, useState, useContext } from "react";
import { getNews } from "../services/api";

const NewsContext = createContext();
export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const data = await getNews();
    setNews(data);
  };

  return (
    <NewsContext.Provider value={{ news, loadNews }}>
      {children}
    </NewsContext.Provider>
  );
}
export function useNews() {
  return useContext(NewsContext);
}