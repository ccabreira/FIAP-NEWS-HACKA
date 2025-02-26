const express = require("express");
const multer = require("multer");
const {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
} = require("../controllers/newsController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// 📌 Rota para listar todas as notícias
router.get("/", getNews);

// 📌 Rota para buscar uma notícia específica por ID
router.get("/:id", getNewsById);

// 📌 Rota para criar uma nova notícia
router.post("/", upload.single("image"), createNews);

// 📌 Rota para atualizar uma notícia existente
router.put("/:id", upload.single("image"), updateNews);

// 📌 Rota para excluir uma notícia
router.delete("/:id", deleteNews);

module.exports = router;



