const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const newsRoutes = require("./src/routes/newsRoutes");

const app = express();

// 🔹 Middlewares essenciais
app.use(cors({
  origin: "*", // Permite qualquer origem
  methods: ["GET", "POST"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Rota raiz para verificar se a API está rodando
app.get("/", (req, res) => {
  res.send("🚀 API FIAP News está rodando!");
});

// ✅ Rotas da API
app.use("/api/news", newsRoutes);

// 🔹 Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro ao conectar ao MongoDB", err));

// 🔹 Inicializar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));


