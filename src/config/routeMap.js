

const routeMap = [
  // ── PEDIDOS ──────────────────────────────
  { method: "GET",    path: "/pedidos",           service: "PEDIDOS" },
  { method: "GET",    path: "/pedidos/:id",        service: "PEDIDOS" },
  { method: "POST",   path: "/pedidos",            service: "PEDIDOS" },
  { method: "PUT",    path: "/pedidos/:id",        service: "PEDIDOS" },

  // ── COBROS ───────────────────────────────
  { method: "POST",   path: "/cobros",             service: "COBROS" },
  { method: "GET",    path: "/cobros/:id",         service: "COBROS" },
  { method: "POST",   path: "/cobros/reembolsos",  service: "COBROS" },

  // ── BANCO ────────────────────────────────
  { method: "POST",   path: "/banco/cuentas",      service: "BANCO" },
  { method: "POST",   path: "/banco/tarjetas",     service: "BANCO" },
  { method: "POST",   path: "/banco/transferencia",service: "BANCO" },

  // ── REPARTIDORES ─────────────────────────
  { method: "GET",    path: "/repartidores/pedidos",    service: "REPARTIDORES" },
  { method: "POST",   path: "/repartidores/aceptar",    service: "REPARTIDORES" },
  { method: "POST",   path: "/repartidores/cuota-extra",service: "REPARTIDORES" },

  // ── PAQUETES ─────────────────────────────
  { method: "POST",   path: "/paquetes",           service: "PAQUETES" },
  { method: "POST",   path: "/paquetes/confirmar", service: "PAQUETES" },

  // ── DESCUENTOS ───────────────────────────
  { method: "POST",   path: "/descuentos",         service: "DESCUENTOS" },
  { method: "POST",   path: "/descuentos/aplicar", service: "DESCUENTOS" },

  // ── ADMIN / CONTABILIDAD (MOVIMIENTOS) ───
  { method: "GET",    path: "/movimientos/fondos",         service: "MOVIMIENTOS" },
  { method: "POST",   path: "/movimientos/ingreso-pedido", service: "MOVIMIENTOS" },
  { method: "POST",   path: "/movimiento/egreso",          service: "MOVIMIENTOS" },
  { method: "POST",   path: "/reembolso",                  service: "MOVIMIENTOS" },
  { method: "POST",   path: "/compensaciones",             service: "MOVIMIENTOS" },
  { method: "GET",    path: "/reportes/ventas",            service: "MOVIMIENTOS" },
  { method: "GET",    path: "/dashboard",                  service: "MOVIMIENTOS" },

  // ── CHATS ────────────────────────────────
  { method: "GET",    path: "/chats",              service: "CHATS" },
  { method: "POST",   path: "/chats",              service: "CHATS" },

  // ── SOPORTE ──────────────────────────────
  { method: "POST",   path: "/soporte",            service: "SOPORTE" },
  { method: "POST",   path: "/soporte/reembolso",  service: "SOPORTE" },

  // ── AUTH / USUARIOS ───────────────────────
    { method: "POST",   path: "/auth/customers/register", service: "AUTH" },
    { method: "POST",   path: "/auth/customers/login",    service: "AUTH" },
    { method: "GET",    path: "/auth/me",                 service: "AUTH" },
    { method: "GET",    path: "/usuarios/:tipo/:id",       service: "AUTH" },
    { method: "POST",   path: "/couriers/register",        service: "AUTH" },
    { method: "GET",    path: "/couriers/me/account-status", service: "AUTH" },


    // ── PROMOCIONES ───────────────────────────
      { method: "GET",  path: "/promociones",      service: "PROMOCIONES" },
      { method: "POST", path: "/promociones",      service: "PROMOCIONES" },
      { method: "PUT",  path: "/promociones/:id",  service: "PROMOCIONES" },
      { method: "DELETE", path: "/promociones/:id", service: "PROMOCIONES" },
];

module.exports = routeMap;
