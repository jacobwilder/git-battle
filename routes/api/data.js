const router = require("express").Router();
const { 
  getSavedData, 
  saveData 
} = require("../../controllers/data-controller");

/**
 * Route to retrieve scoreboard
 * GET /data/scoreboard
 */
router.get("/scoreboard", getSavedData);

/**
 * Route to save user scores
 * POST /data/scoreboard
 */
router.post("/scoreboard", saveData);

module.exports = router;