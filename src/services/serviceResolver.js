
const getServiceUrl = (serviceName) => {
  const urls = {
    PEDIDOS:      process.env.PEDIDOS_URL,
    COBROS:       process.env.COBROS_URL,
    BANCO:        process.env.BANCO_URL,
    REPARTIDORES: process.env.REPARTIDORES_URL,
    PAQUETES:     process.env.PAQUETES_URL,
    DESCUENTOS:   process.env.DESCUENTOS_URL,
    MOVIMIENTOS:  process.env.MOVIMIENTOS_URL,
    CHATS:        process.env.CHATS_URL,
    SOPORTE:      process.env.SOPORTE_URL,
  };

  return urls[serviceName] || null;
};

module.exports = { getServiceUrl };
