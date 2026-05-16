const axios = require("axios");
const routeMap = require("../config/routeMap");
const { getServiceUrl } = require("../services/serviceResolver");

const pathToRegex = (path) => {
  const escaped = path.replace(/:[^/]+/g, "[^/]+");
  return new RegExp("^" + escaped + "$");
};

const matchRoute = (method, path) => {
  return routeMap.find((route) => {
    const methodMatch = route.method === method.toUpperCase();
    const pathMatch = pathToRegex(route.path).test(path);
    return methodMatch && pathMatch;
  });
};

const handleBrokerRequest = async (req, res) => {
  const { method, path, body } = req.body;

  if (!method || !path) {
    return res.status(400).json({
      success: false,
      error: "Faltan campos obligatorios: 'method' y 'path' son requeridos",
      ejemplo: {
        method: "POST",
        path: "/pedidos",
        body: { pedido_status: 2, pedido_total: 0 },
      },
    });
  }

  const matchedRoute = matchRoute(method, path);

  if (!matchedRoute) {
    return res.status(404).json({
      success: false,
      error: "Ruta no encontrada: [" + method.toUpperCase() + "] " + path,
      message: "Verifica que el método y el path sean correctos",
    });
  }

  const serviceUrl = getServiceUrl(matchedRoute.service);

  if (!serviceUrl) {
    return res.status(503).json({
      success: false,
      error: "URL del servicio '" + matchedRoute.service + "' no configurada",
      message: "Revisa el archivo .env y asegurate de tener la URL definida",
    });
  }

  const targetUrl = serviceUrl + path;

  console.log("[BROKER] " + method.toUpperCase() + " " + path + " -> " + matchedRoute.service + " (" + targetUrl + ")");

  try {
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "BrokerService/1.0",
    };

    if (req.headers["authorization"]) {
      headers["Authorization"] = req.headers["authorization"];
    }

    const response = await axios({
      method: method.toLowerCase(),
      url: targetUrl,
      data: body || {},
      headers: headers,
      timeout: 10000,
    });

    return res.status(response.status).json({
      success: true,
      service: matchedRoute.service,
      path: targetUrl,
      data: response.data,
    });

  } catch (error) {
    if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
      return res.status(503).json({
        success: false,
        service: matchedRoute.service,
        error: "El servicio '" + matchedRoute.service + "' no esta disponible",
        message: "El microservicio no esta corriendo. Avisa al equipo correspondiente.",
        targetUrl,
      });
    }

    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        service: matchedRoute.service,
        error: "El microservicio respondio con un error",
        data: error.response.data,
      });
    }

    console.error("[BROKER ERROR]", error.message);
    return res.status(500).json({
      success: false,
      error: "Error interno del broker",
      message: error.message,
    });
  }
};

module.exports = { handleBrokerRequest };