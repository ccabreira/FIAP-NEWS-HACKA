const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const newsRoutes = require("./src/routes/newsRoutes");

dotenv.config();
connectDB();

const app = express();

// 🔹 Middleware
app.use(express.json()); // Permite JSON no corpo da requisição
app.use(cors()); // Permite requisições de outros domínios

// 🔹 Rotas
app.use("/api/news", newsRoutes);

// 🔹 Importa as rotas
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes); // Adiciona as rotas de autenticação

// 🔹 Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));




