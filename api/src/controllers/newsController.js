const News = require("../models/News");
const AppError = require("../utils/AppError");

exports.getNews = async (req, res, next) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
  } catch (err) {
    next(new AppError("Erro ao buscar notícias", 500));
  }
};

exports.createNews = async (req, res, next) => {
  try {
    const { title, category, author, content } = req.body;
    const imageUrl = req.file?.path || null;
    const news = await News.create({ title, category, author, content, image: imageUrl });
    res.status(201).json(news);
  } catch (err) {
    next(new AppError("Erro ao criar notícia", 500));
  }
};
