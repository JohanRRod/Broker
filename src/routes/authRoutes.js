const express = require("express");
const router = express.Router();
const { register, login, me } = require("../controllers/authController");
const { verifyToken } = require("../middleware/auth");

router.post("/auth/customers/register", register);
router.post("/auth/customers/login", login);
router.get("/auth/me", verifyToken, me);

module.exports = router;