const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Usuarios en memoria por ahora
// Cuando el microservicio Auth esté listo, esto se reemplaza con una llamada axios
const usuarios = [];

const register = async (req, res) => {
  const { nombre, apellidos, email, password, telefono, rol } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({
      success: false,
      error: "nombre, email y password son obligatorios",
    });
  }

  const existe = usuarios.find((u) => u.email === email);
  if (existe) {
    return res.status(409).json({
      success: false,
      error: "El email ya está registrado",
    });
  }

  const password_hash = await bcrypt.hash(password, 10);
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    apellidos: apellidos || "",
    email,
    password_hash,
    telefono: telefono || "",
    tipo_usuario: "cliente",
    rol: rol || "cliente",
    estado: "activo",
    fecha_creacion: new Date().toISOString(),
  };

  usuarios.push(nuevoUsuario);

  const token = jwt.sign(
    { id: nuevoUsuario.id, email: nuevoUsuario.email, rol: nuevoUsuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return res.status(201).json({
    ok: true,
    usuario: {
      id: nuevoUsuario.id,
      nombre: nuevoUsuario.nombre,
      email: nuevoUsuario.email,
      tipo_usuario: nuevoUsuario.tipo_usuario,
      rol: nuevoUsuario.rol,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: "email y password son obligatorios",
    });
  }

  const usuario = usuarios.find((u) => u.email === email);
  if (!usuario) {
    return res.status(401).json({
      success: false,
      error: "Credenciales incorrectas",
    });
  }

  const passwordValido = await bcrypt.compare(password, usuario.password_hash);
  if (!passwordValido) {
    return res.status(401).json({
      success: false,
      error: "Credenciales incorrectas",
    });
  }

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return res.json({
    ok: true,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    },
    token,
  });
};


const me = (req, res) => {
  return res.json({
    id: req.usuario.id,
    email: req.usuario.email,
    rol: req.usuario.rol,
  });
};

module.exports = { register, login, me };