const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).render("home");
});
router.get("/carrito", async (req, res, next) => {
  return res.status(200).render("carrito");
});
router.get("/favoritos", async (req, res, next) => {
  return res.status(200).render("favoritos");
});
router.get("/login", async (req, res, next) => {
  return res.status(200).render("login");
});

module.exports = router;
