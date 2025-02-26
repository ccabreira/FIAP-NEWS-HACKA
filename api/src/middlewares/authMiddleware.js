const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return next(new AppError("Acesso negado. Token ausente.", 401));

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return next(new AppError("Token inválido ou expirado.", 403));
  }
};

const adminMiddleware = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ error: "Acesso negado. Apenas administradores podem acessar." });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };

module.exports = authMiddleware;



