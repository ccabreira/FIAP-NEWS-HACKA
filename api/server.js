require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

// Conecta ao MongoDB
connectDB();

const app = express();

// 🔹 Middleware
app.use(express.json());
app.use(cors());

// 🔹 Importa as rotas
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const newsRoutes = require("./src/routes/newsRoutes");

// 🔹 Usa as rotas corretamente
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);  // 🔹 Essa rota estava faltando
app.use("/api/news", newsRoutes);

// 🔹 Rota raiz para teste
app.get("/", (req, res) => {
    res.send("🚀 API Online!");
});

// 🔹 Inicializa o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));

console.log(`🌍 Teste a API em: http://localhost:${PORT}/api/news`);



