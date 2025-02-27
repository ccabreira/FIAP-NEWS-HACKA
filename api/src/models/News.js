const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true // 🔹 Adiciona "createdAt" e "updatedAt" automaticamente
  }
);

module.exports = mongoose.model("News", newsSchema);

