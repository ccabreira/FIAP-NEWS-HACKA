const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const AppError = require("../utils/AppError");

// Criar usuário
const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(new AppError("Todos os campos são obrigatórios", 400));
    }

    const userExists = await User.findOne({ email });
    if (userExists) return next(new AppError("E-mail já cadastrado", 400));

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "Usuário criado com sucesso", user });
  } catch (err) {
    next(err);
  }
};

// Login de usuário
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Credenciais inválidas." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, user: { id: user._id, email: user.email, isAdmin: user.isAdmin } });
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    res.status(500).json({ error: "Erro no servidor. Tente novamente." });
  }
};

// Obter perfil do usuário autenticado
const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return next(new AppError("Usuário não encontrado", 404));
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser, loginUser, getUserProfile };


