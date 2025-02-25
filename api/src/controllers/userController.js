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
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return next(new AppError("E-mail e senha são obrigatórios", 400));

    const user = await User.findOne({ email });
    if (!user) return next(new AppError("Usuário não encontrado", 404));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(new AppError("Credenciais inválidas", 401));

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login bem-sucedido", token });
  } catch (err) {
    next(err);
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


