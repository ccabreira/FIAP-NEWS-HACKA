const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const newsRoutes = require("./src/routes/newsRoutes");

const app = express();

app.use(morgan("dev")); // Log das requisições
app.use(express.json()); // Suporte a JSON no body das requisições
app.use(cors()); // Permite requisições do frontend

// 🔹 Rate Limiting para evitar abuso de requisições
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo de 100 requisições por IP
});
app.use(limiter);

// ✅ Rota raiz para verificar se a API está rodando
app.get("/", (req, res) => {
  res.send("🚀 API FIAP News está rodando!");
});

// ✅ Rotas da API
app.use("/api/news", newsRoutes);

module.exports = app;

