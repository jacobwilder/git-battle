const router = require("express").Router();

const dataRoutes = require("./data");
const userRoutes = require("./user");

// Data (scoreboard) routes
router.use("/data", dataRoutes)

// User routes
router.use("/user", userRoutes)

module.exports = router;