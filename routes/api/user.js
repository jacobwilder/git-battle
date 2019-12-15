const axios = require("axios");
const router = require("express").Router();

const { 
  showUser,
  listTwoUsers,
  listRepos,
  listCommits
} = require("../../controllers/user-controller");

/**
 * Route to retrieve user profile
 * GET /api/:username
 */
router.get("/:username", showUser);

/**
 * Route to compare two user's profiles
 * GET /api/:username1?/:username2?
 */
router.get("/:username1?/:username2?", listTwoUsers);

/**
 * Route to retrieve user repos
 * GET /api/repos/:username
 */
router.get("/repos/:username", listRepos);

/**
 * Route to retrieve user commits (deprecated?)
 * GET /api/commits/:username
 */
router.get("/commits/:username", listCommits);

module.exports = router;