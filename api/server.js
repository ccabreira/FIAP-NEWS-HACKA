// server.js - Inicializa o servidor
const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");
require("dotenv").config();

const newsRoutes = require("./src/routes/newsRoutes");

const app = express();

// Conectar ao MongoDB
connectDB();

// Middlewares essenciais
app.use(cors());
app.use(express.json());

// Rota raiz para verificar se a API está rodando
app.get("/", (req, res) => {
  res.send("🚀 API FIAP News está rodando!");
});

// Rotas da API
app.use("/api/news", newsRoutes);

// Inicializar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));


