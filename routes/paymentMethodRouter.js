const express = require("express");
const router = express.Router();
const paymentMethodController = require("../controllers/paymentMethodController");

router.get("/paymentMethods", paymentMethodController.getAllPaymentMethods);

module.exports = router;
