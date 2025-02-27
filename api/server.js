const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const newsRouter = require('./routes/news');

const userRoutes = require("./src/routes/userRoutes");


dotenv.config(); // 🔹 Carrega variáveis de ambiente

const app = express();

// 🔹 Middlewares
app.use(express.json()); // Para receber JSON no body
app.use(cors()); // Permitir requisições de outras origens

// 🔹 Conectar ao MongoDB
mongoose.connect('mongodb://localhost/fiap-news', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

// 🔹 Definição das rotas
app.use("/api/users", userRoutes); // Rota para login e cadastro de usuários

// 🔹 Porta do servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
