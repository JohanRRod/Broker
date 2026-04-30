const express = require("express");
const router = express.Router();
const { procesarRequest } = require("../controllers/broker.controller");


router.post("/broker/request", procesarRequest);


router.get("/broker/servicios", (req, res) => {
  const SERVICES = require("../../config/services.config");
  const resumen = Object.entries(SERVICES).map(([nombre, config]) => ({
    servicio: nombre,
    url_base: config.baseURL,
    rutas_disponibles: config.rutas,
  }));
  res.json({ total_servicios: resumen.length, servicios: resumen });
});

module.exports = router;
