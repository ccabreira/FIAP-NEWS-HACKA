const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// 🔹 Criar usuário
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

    // 🔹 Sempre criptografa a senha antes de salvar no banco
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Senha criptografada:", hashedPassword);

    const user = new User({
      name,
      email,
      password: hashedPassword, // 🔹 Salvando senha criptografada
      isAdmin: isAdmin || false,
    });

    await user.save();
    res.status(201).json({ message: "Usuário criado com sucesso", user });
    await user.save();
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
});
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
};

// 🔹 Login de usuário
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

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Senha corresponde?", isMatch);

    if (!isMatch) {
      return res.status(401).json({ error: "Senha errada." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    );

    res.json({
      token,
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
