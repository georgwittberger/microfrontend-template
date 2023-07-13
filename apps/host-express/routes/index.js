const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home - Legacy Host Application" });
});

/* GET service page. */
router.get("/service", function (req, res, next) {
  res.render("service", {
    title: "Service - Legacy Host Application",
    service: {
      moduleUrl: process.env.SERVICE_MFE_MODULE_URL ?? "",
      message: "Hello from Host!",
    },
  });
});

module.exports = router;
