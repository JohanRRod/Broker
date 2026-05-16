const routeMap = [
  // ── USERS ────────────────────────────────
  { method: "GET",    path: "/users",                    service: "PEDIDOS" },
  { method: "GET",    path: "/users/:id",                service: "PEDIDOS" },
  { method: "POST",   path: "/users",                    service: "PEDIDOS" },
  { method: "PUT",    path: "/users/:id",                service: "PEDIDOS" },
  { method: "DELETE", path: "/users/:id",                service: "PEDIDOS" },

  // ── COURIERS ─────────────────────────────
  { method: "GET",    path: "/couriers",                 service: "PEDIDOS" },
  { method: "GET",    path: "/couriers/available",       service: "PEDIDOS" },
  { method: "GET",    path: "/couriers/:id",             service: "PEDIDOS" },
  { method: "POST",   path: "/couriers",                 service: "PEDIDOS" },
  { method: "PUT",    path: "/couriers/:id",             service: "PEDIDOS" },
  { method: "PUT",    path: "/couriers/:id/status",      service: "PEDIDOS" },
  { method: "DELETE", path: "/couriers/:id",             service: "PEDIDOS" },

  // ── ADDRESSES ────────────────────────────
  { method: "GET",    path: "/addresses",                service: "PEDIDOS" },
  { method: "GET",    path: "/addresses/:id",            service: "PEDIDOS" },
  { method: "POST",   path: "/addresses",                service: "PEDIDOS" },
  { method: "PUT",    path: "/addresses/:id",            service: "PEDIDOS" },
  { method: "DELETE", path: "/addresses/:id",            service: "PEDIDOS" },

  // ── PRICES ───────────────────────────────
  { method: "GET",    path: "/prices",                   service: "PEDIDOS" },
  { method: "GET",    path: "/prices/:id",               service: "PEDIDOS" },
  { method: "POST",   path: "/prices",                   service: "PEDIDOS" },
  { method: "PUT",    path: "/prices/:id",               service: "PEDIDOS" },
  { method: "DELETE", path: "/prices/:id",               service: "PEDIDOS" },

  // ── SHIPMENTS ────────────────────────────
  { method: "GET",    path: "/shipments",                service: "PEDIDOS" },
  { method: "GET",    path: "/shipments/:id",            service: "PEDIDOS" },
  { method: "POST",   path: "/shipments",                service: "PEDIDOS" },
  { method: "PUT",    path: "/shipments/:id",            service: "PEDIDOS" },
  { method: "DELETE", path: "/shipments/:id",            service: "PEDIDOS" },
  { method: "PATCH",  path: "/shipments/:id/accept",     service: "PEDIDOS" },
  { method: "PATCH",  path: "/shipments/:id/status",     service: "PEDIDOS" },

  // ── PACKAGES ─────────────────────────────
  { method: "GET",    path: "/packages",                 service: "PEDIDOS" },
  { method: "GET",    path: "/packages/:id",             service: "PEDIDOS" },
  { method: "POST",   path: "/packages",                 service: "PEDIDOS" },
  { method: "PUT",    path: "/packages/:id",             service: "PEDIDOS" },
  { method: "DELETE", path: "/packages/:id",             service: "PEDIDOS" },

  // ── COURIER STATUS TYPES ──────────────────
  { method: "GET",    path: "/courier-status-types",     service: "PEDIDOS" },
  { method: "GET",    path: "/courier-status-types/:id", service: "PEDIDOS" },
  { method: "POST",   path: "/courier-status-types",     service: "PEDIDOS" },
  { method: "PUT",    path: "/courier-status-types/:id", service: "PEDIDOS" },
  { method: "DELETE", path: "/courier-status-types/:id", service: "PEDIDOS" },

  // ── COURIER STATUSES ─────────────────────
  { method: "GET",    path: "/courier-statuses",         service: "PEDIDOS" },
  { method: "GET",    path: "/courier-statuses/:id",     service: "PEDIDOS" },
  { method: "POST",   path: "/courier-statuses",         service: "PEDIDOS" },
  { method: "PUT",    path: "/courier-statuses/:id",     service: "PEDIDOS" },
  { method: "DELETE", path: "/courier-statuses/:id",     service: "PEDIDOS" },

  // ── COBROS ───────────────────────────────
  { method: "POST",   path: "/cobros",                   service: "COBROS" },
  { method: "GET",    path: "/cobros/:id",               service: "COBROS" },
  { method: "POST",   path: "/cobros/reembolsos",        service: "COBROS" },

  // ── BANKS ────────────────────────────────
    { method: "GET",    path: "/banks",                           service: "BANCO" },
    { method: "GET",    path: "/banks/:id",                       service: "BANCO" },
    { method: "POST",   path: "/banks",                           service: "BANCO" },
    { method: "PUT",    path: "/banks/:id",                       service: "BANCO" },
    { method: "DELETE", path: "/banks/:id",                       service: "BANCO" },

    // ── ACCOUNTS ─────────────────────────────
    { method: "GET",    path: "/accounts",                        service: "BANCO" },
    { method: "GET",    path: "/accounts/my-accounts",            service: "BANCO" },
    { method: "GET",    path: "/accounts/:id",                    service: "BANCO" },
    { method: "POST",   path: "/accounts",                        service: "BANCO" },
    { method: "PUT",    path: "/accounts/:id",                    service: "BANCO" },
    { method: "DELETE", path: "/accounts/:id",                    service: "BANCO" },

    // ── CARDS ────────────────────────────────
    { method: "GET",    path: "/cards",                           service: "BANCO" },
    { method: "GET",    path: "/cards/:id",                       service: "BANCO" },
    { method: "GET",    path: "/cards/:id/statement",             service: "BANCO" },
    { method: "POST",   path: "/cards/validate",                  service: "BANCO" },
    { method: "PUT",    path: "/cards/:id",                       service: "BANCO" },
    { method: "DELETE", path: "/cards/:id",                       service: "BANCO" },

    // ── ASSOCIATES ───────────────────────────
    { method: "GET",    path: "/associates",                      service: "BANCO" },
    { method: "GET",    path: "/associates/:id",                  service: "BANCO" },
    { method: "POST",   path: "/associates/login",                service: "BANCO" },
    { method: "GET",    path: "/associates/card-requests/mine",   service: "BANCO" },
    { method: "POST",   path: "/associates/card-requests",        service: "BANCO" },

    // ── TRANSACTIONS ─────────────────────────
    { method: "GET",    path: "/transactions",                    service: "BANCO" },
    { method: "GET",    path: "/transactions/:id",                service: "BANCO" },
    { method: "GET",    path: "/transactions/by-account/:accountId", service: "BANCO" },
    { method: "POST",   path: "/transactions/tokenize",           service: "BANCO" },
    { method: "POST",   path: "/transactions/charge",             service: "BANCO" },
    { method: "POST",   path: "/transactions/card-payment",       service: "BANCO" },
    { method: "POST",   path: "/transactions/deposit",            service: "BANCO" },

    // ── TRANSFERS ────────────────────────────
    { method: "GET",    path: "/transfers",                       service: "BANCO" },
    { method: "GET",    path: "/transfers/:id",                   service: "BANCO" },
    { method: "GET",    path: "/transfers/by-account/:accountId", service: "BANCO" },
    { method: "POST",   path: "/transfers",                       service: "BANCO" },

    // ── ADMIN BANCO ──────────────────────────
    { method: "GET",    path: "/admin/card-requests/pending",     service: "BANCO" },
    { method: "POST",   path: "/admin/login",                     service: "BANCO" },
    { method: "POST",   path: "/admin/register",                  service: "BANCO" },
    { method: "POST",   path: "/admin/associates",                service: "BANCO" },
    { method: "POST",   path: "/admin/card-requests/:id/approve", service: "BANCO" },
    { method: "POST",   path: "/admin/card-requests/:id/reject",  service: "BANCO" },
    { method: "PUT",    path: "/admin/associates/:id",            service: "BANCO" },

  // ── REPARTIDORES ─────────────────────────
  { method: "GET",    path: "/repartidores/pedidos",     service: "REPARTIDORES" },
  { method: "POST",   path: "/repartidores/aceptar",     service: "REPARTIDORES" },
  { method: "POST",   path: "/repartidores/cuota-extra", service: "REPARTIDORES" },

  // ── PAQUETES ─────────────────────────────
  { method: "POST",   path: "/paquetes",                 service: "PAQUETES" },
  { method: "POST",   path: "/paquetes/confirmar",       service: "PAQUETES" },

  // ── DESCUENTOS ───────────────────────────
  { method: "POST",   path: "/descuentos",               service: "DESCUENTOS" },
  { method: "POST",   path: "/descuentos/aplicar",       service: "DESCUENTOS" },

  // ── ADMIN / CONTABILIDAD ─────────────────
  { method: "GET",    path: "/movimientos/fondos",         service: "MOVIMIENTOS" },
  { method: "POST",   path: "/movimientos/ingreso-pedido", service: "MOVIMIENTOS" },
  { method: "POST",   path: "/movimiento/egreso",          service: "MOVIMIENTOS" },
  { method: "POST",   path: "/reembolso",                  service: "MOVIMIENTOS" },
  { method: "POST",   path: "/compensaciones",             service: "MOVIMIENTOS" },
  { method: "GET",    path: "/reportes/ventas",            service: "MOVIMIENTOS" },
  { method: "GET",    path: "/dashboard",                  service: "MOVIMIENTOS" },

  // ── CHATS ────────────────────────────────
  { method: "GET",    path: "/chats",                    service: "CHATS" },
  { method: "POST",   path: "/chats",                    service: "CHATS" },

  // ── SOPORTE ──────────────────────────────
  { method: "POST",   path: "/soporte",                  service: "SOPORTE" },
  { method: "POST",   path: "/soporte/reembolso",        service: "SOPORTE" },

  // ── AUTH ─────────────────────────────────
  { method: "POST",   path: "/auth/customers/register",      service: "AUTH" },
  { method: "POST",   path: "/auth/customers/login",         service: "AUTH" },
  { method: "GET",    path: "/auth/me",                      service: "AUTH" },
  { method: "GET",    path: "/usuarios/:tipo/:id",           service: "AUTH" },
  { method: "POST",   path: "/couriers/register",            service: "AUTH" },
  { method: "GET",    path: "/couriers/me/account-status",   service: "AUTH" },

  // ── PROMOCIONES ──────────────────────────
  { method: "GET",    path: "/promociones",              service: "PROMOCIONES" },
  { method: "POST",   path: "/promociones",              service: "PROMOCIONES" },
  { method: "PUT",    path: "/promociones/:id",          service: "PROMOCIONES" },
  { method: "DELETE", path: "/promociones/:id",          service: "PROMOCIONES" },
];

module.exports = routeMap;