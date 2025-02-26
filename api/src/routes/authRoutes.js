const express = require("express");
const User = require("../models/User"); // Modelo do usuário

const router = express.Router();

// 🔹 Endpoint para redefinir senha (sem criptografia)
router.post("/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // 🔹 Verifica se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    // 🔹 Atualiza a senha sem criptografia
    user.password = newPassword;

    // 🔹 Salva a nova senha no banco de dados
    await user.save();

    res.json({ message: "Senha redefinida com sucesso!" });
  } catch (error) {
    console.error("Erro ao redefinir senha:", error);
    res.status(500).json({ error: "Erro ao redefinir senha." });
  }
});

module.exports = router;

