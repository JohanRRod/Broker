require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const brokerRoutes = require("./routes/brokerRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.BROKER_PORT || 4000;

app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

app.use("/api", brokerRoutes);
app.use("/api", authRoutes);

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Broker corriendo correctamente",
    timestamp: new Date().toISOString(),
    port: PORT,
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Ruta del broker no encontrada",
    message: "El unico endpoint disponible es POST /api/broker/request",
  });
});

app.listen(PORT, () => {
  console.log("==========================================");
  console.log("  BROKER corriendo en http://localhost:" + PORT);
  console.log("  Endpoint: POST /api/broker/request");
  console.log("  Health:   GET  /health");
  console.log("==========================================");
});