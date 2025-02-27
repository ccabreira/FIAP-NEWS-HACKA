const express = require("express");
const { getAllNews, getNewsById, createNews } = require("../controllers/newsController");

const router = express.Router();

// ✅ Rota para obter todas as notícias
router.get("/", getAllNews);

// ✅ Rota para obter uma única notícia por ID
router.get("/:id", getNewsById);

// ✅ Rota para criar uma nova notícia
router.post("/", createNews);

module.exports = router; // 

