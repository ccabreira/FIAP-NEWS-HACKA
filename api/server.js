const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const app = require("./App");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));

