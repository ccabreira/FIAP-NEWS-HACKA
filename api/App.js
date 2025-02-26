const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const newsRoutes = require("./src/routes/newsRoutes");
const userRoutes = require("./src/routes/userRoutes");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

app.use(morgan("dev")); // Log de requisições
app.use(express.json()); // Permite receber JSON no body das requisições
app.use(cors()); // Habilita CORS

// Rate Limiting para evitar abusos
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo de 100 requisições por IP
});
app.use(limiter);

// ✅ **Rota raiz para evitar erro 404**
app.get("/", (req, res) => {
  res.send("🚀 API FIAP News está rodando!");
});

// 🔄 **Redirecionamento de "/news" para "/api/news"**
app.use("/news", (req, res) => {
  res.redirect("/api/news");
});

// Definir Rotas
app.use("/api/news", newsRoutes);
app.use("/api/users", userRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

module.exports = app;




