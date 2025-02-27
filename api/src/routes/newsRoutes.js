const express = require("express");
const router = express.Router();
const { getAllNews, getNewsById, createNews } = require("../controllers/newsController");

// ✅ Listar todas as notícias
router.get("/", getAllNews);

// ✅ Buscar uma notícia por ID
router.get("/:id", getNewsById);

// ✅ Criar uma nova notícia
router.post("/", createNews);

module.exports = router;


