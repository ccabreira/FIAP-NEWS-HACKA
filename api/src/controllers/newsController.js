const News = require("../models/News");

// ✅ Obter todas as notícias
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    if (!news.length) {
      return res.status(200).json({ message: "Nenhuma notícia disponível." });
    }
    res.status(200).json(news);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    res.status(500).json({ error: "Erro ao buscar notícias." });
  }
};

// ✅ Obter notícia por ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ error: "Notícia não encontrada." });
    }
    res.status(200).json(news);
  } catch (error) {
    console.error("Erro ao buscar notícia:", error);
    res.status(500).json({ error: "Erro ao buscar notícia." });
  }
};

// ✅ Criar uma nova notícia
exports.createNews = async (req, res) => {
  try {
    const { title, category, author, content } = req.body;

    if (!title || !category || !author || !content) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const news = new News({ title, category, author, content });
    await news.save();

    res.status(201).json({ message: "Notícia criada com sucesso!", news });
  } catch (error) {
    console.error("Erro ao criar notícia:", error);
    res.status(500).json({ error: "Erro ao criar notícia." });
  }
};
