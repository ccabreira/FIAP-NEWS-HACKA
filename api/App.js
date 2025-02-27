// src/routes/newsRoutes.js - Define as rotas da API
const express = require("express");
const { getAllNews, getNewsById, createNews } = require("../controllers/newsController");

const router = express.Router();

// Listar todas as notícias
router.get("/", getAllNews);

// Buscar uma notícia por ID
router.get("/:id", getNewsById);

// Criar uma nova notícia
router.post("/", createNews);

module.exports = router;
