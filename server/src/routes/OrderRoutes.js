const { newOrder } = require("../controller/OrderController");

const router = require("express").Router();

router.post("/new", newOrder); 

module.exports = router;
