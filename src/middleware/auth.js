const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Acceso denegado",
      message: "Se requiere token de autenticación",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      error: "Token inválido o expirado",
      message: "Inicia sesión nuevamente",
    });
  }
};

module.exports = { verifyToken };