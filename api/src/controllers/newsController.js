const News = require("../models/News");

// 🔹 Obter todas as notícias
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar notícias." });
  }
};

// 🔹 Obter notícia por ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ error: "Notícia não encontrada." });

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar notícia." });
  }
};

// 🔹 Criar uma nova notícia
exports.createNews = async (req, res) => {
  try {
    const { title, category, author, content } = req.body;
    if (!title || !category || !author || !content) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const news = new News({ title, category, author, content });
    await news.save();

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar notícia." });
  }
};
