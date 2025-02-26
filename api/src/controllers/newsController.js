const News = require("../models/News");

// 🔹 Listar todas as notícias
const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar notícias." });
  }
};

// 🔹 Buscar notícia por ID
const getNewsById = async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);
    if (!newsItem) {
      return res.status(404).json({ error: "Notícia não encontrada." });
    }
    res.json(newsItem);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar notícia." });
  }
};

// 🔹 Criar uma nova notícia
const createNews = async (req, res) => {
  try {
    const { title, category, author, content } = req.body;
    const image = req.file ? req.file.path : null; // Se houver imagem, salva o caminho

    const news = new News({
      title,
      category,
      author,
      content,
      image
    });

    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar notícia." });
  }
};

// 🔹 Atualizar uma notícia existente
const updateNews = async (req, res) => {
  try {
    const { title, category, author, content } = req.body;
    const image = req.file ? req.file.path : undefined; // Se houver imagem nova, atualiza

    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      { title, category, author, content, ...(image && { image }) },
      { new: true }
    );

    if (!updatedNews) {
      return res.status(404).json({ error: "Notícia não encontrada." });
    }

    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar notícia." });
  }
};

// 🔹 Excluir uma notícia
const deleteNews = async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);

    if (!deletedNews) {
      return res.status(404).json({ error: "Notícia não encontrada." });
    }

    res.json({ message: "Notícia excluída com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir notícia." });
  }
};

module.exports = {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
};

