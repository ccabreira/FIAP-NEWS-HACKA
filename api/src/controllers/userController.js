const User = require("../models/User");

// 🔹 Criar usuário (sem criptografia)
const createUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "E-mail já cadastrado." });
    }

    console.log("Registrando usuário:", { name, email, password });

    const user = new User({
      name,
      email,
      password, // 🔹 Salvando senha sem criptografia
      isAdmin: isAdmin || false,
    });

    await user.save();
    res.status(201).json({ message: "Usuário criado com sucesso", user });

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
};

// 🔹 Login de usuário (sem criptografia e sem JWT)
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "E-mail não encontrado." });
    }

    console.log("Usuário encontrado no banco:", user);
    console.log("Senha enviada pelo usuário:", password);
    console.log("Senha armazenada no banco:", user.password);

    if (user.password !== password) {
      return res.status(401).json({ error: "Senha errada." });
    }

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    res.status(500).json({ error: "Erro no servidor. Tente novamente." });
  }
};

module.exports = { createUser, loginUser };
