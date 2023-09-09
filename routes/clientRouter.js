const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.get("/clients", clientController.getAllClients);
router.get("/clients/:id", clientController.getOneClient);
router.put("/clients/:id", clientController.editClient);
router.post("/clients", clientController.postClient);

module.exports = router;
