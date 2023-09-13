const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

router.get("/invoices", invoiceController.getInvoices);
router.post("/invoices/clientInfo", invoiceController.getClientInfo);

module.exports = router;
