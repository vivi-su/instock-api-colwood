const router = require("express").Router();
const inventoryController = require("../controllers/inventoryController");

router
    .route("/")
    .get(inventoryController.index)
    .post(inventoryController.addInventoryItem);






module.exports = router;