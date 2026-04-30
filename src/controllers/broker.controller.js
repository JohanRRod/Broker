const axios = require("axios");
const SERVICES = require("../../config/services.config");


function resolverServicio(ruta) {
  for (const [nombre, config] of Object.entries(SERVICES)) {
    for (const rutaDefinida of config.rutas) {

      const pattern = rutaDefinida.replace(/:[^/]+/g, "[^/]+");
      const regex = new RegExp(`^${pattern}$`);
      if (regex.test(ruta)) {
        return { nombre, baseURL: config.baseURL };
      }
    }
  }
  return null;
}


const procesarRequest = async (req, res) => {
  const { metodo, ruta, body } = req.body;


  if (!metodo || !ruta) {
    return res.status(400).json({
      error: "Faltan campos requeridos",
      requeridos: { metodo: "GET | POST | PUT | DELETE", ruta: "/pedidos" },
      ejemplo: {
        metodo: "POST",
        ruta: "/pedidos",
        body: { pedido_status: 2, pedido_total: 0 },
      },
    });
  }


  const servicio = resolverServicio(ruta);

  if (!servicio) {
    return res.status(404).json({
      error: `No se encontró ningún servicio para la ruta: "${ruta}"`,
      consejo: "Verifica que la ruta esté bien escrita. Ejemplo: /pedidos, /cobros, /banco/transferencia",
    });
  }

  const urlDestino = `${servicio.baseURL}${ruta}`;
  const metodoHttp = metodo.toUpperCase();

  console.log(`\n📨 [BROKER] Redirigiendo:`);
  console.log(`   Servicio : ${servicio.nombre}`);
  console.log(`   Método   : ${metodoHttp}`);
  console.log(`   URL      : ${urlDestino}`);
  console.log(`   Body     :`, body || "(sin body)");

  try {
    const respuesta = await axios({
      method: metodoHttp,
      url: urlDestino,
      data: body || {},
      timeout: 8000,
    });

    console.log(`✅ [BROKER] Respuesta ${respuesta.status} de ${servicio.nombre}`);

    return res.status(respuesta.status).json({
      broker: {
        servicio: servicio.nombre,
        url_destino: urlDestino,
        metodo: metodoHttp,
      },
      respuesta: respuesta.data,
    });
  } catch (error) {

    if (error.code === "ECONNREFUSED" || error.code === "ECONNABORTED") {
      console.log(`❌ [BROKER] Servicio "${servicio.nombre}" no disponible en ${urlDestino}`);
      return res.status(503).json({
        error: `El servicio "${servicio.nombre}" no está disponible en este momento`,
        url_intentada: urlDestino,
        codigo: error.code,
        consejo: "Verifica que el microservicio esté corriendo y que el puerto en .env sea correcto",
      });
    }


    if (error.response) {
      console.log(`⚠️  [BROKER] Error ${error.response.status} desde "${servicio.nombre}"`);
      return res.status(error.response.status).json({
        broker: {
          servicio: servicio.nombre,
          url_destino: urlDestino,
        },
        error_del_servicio: error.response.data,
      });
    }


    console.error(`💥 [BROKER] Error inesperado:`, error.message);
    return res.status(500).json({
      error: "Error interno del broker",
      detalle: error.message,
    });
  }
};

module.exports = { procesarRequest };
