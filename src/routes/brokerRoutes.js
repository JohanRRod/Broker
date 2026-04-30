const express = require("express");
const router = express.Router();
const { handleBrokerRequest } = require("../controllers/brokerController");


router.post("/broker/request", handleBrokerRequest);

module.exports = router;
