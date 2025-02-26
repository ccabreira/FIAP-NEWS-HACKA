import { useEffect, useState } from "react";
import { getNews, deleteNews } from "../services/api";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  const handleDelete = async (id) => {
    await deleteNews(id);
    setNews(news.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>Painel de Administração</h1>
      <button onClick={() => navigate("/news/new")}>Criar Nova Notícia</button>
      <ul>
        {news.map((item) => (
          <li key={item._id}>
            {item.title}
            <button onClick={() => navigate(`/news/edit/${item._id}`)}>Editar</button>
            <button onClick={() => handleDelete(item._id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
  );
}

export default Admin;
