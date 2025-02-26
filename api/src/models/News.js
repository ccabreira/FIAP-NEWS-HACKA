const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, required: false }, // Permite criação sem imagem
  content: { type: String, required: true },
});

module.exports = mongoose.model("News", NewsSchema);






