const router = require("express").Router();

const { 
  showUser,
  listUsers,
  listTwoUsers,
  listRepos,
  listCommits
} = require("../../controllers/user-controller");

/**
 * Route to compare multiple user profiles
 * GET /api/user/battle/?usernames=user1;user2;user3...
 */
router.get("/list/", listUsers);

/**
 * Route to retrieve user profile
 * GET /api/user/:username
 */
router.get("/:username", showUser);

/**
 * Route to retrieve user repos
 * GET /api/user/repos/:username
 */
router.get("/repos/:username", listRepos);

/**
 * Route to compare two user's profiles
 * GET /api/user/:username1?/:username2?
 */
router.get("/:username1?/:username2?", listTwoUsers);

/**
 * Route to retrieve user commits (deprecated?)
 * GET /api/user/commits/:username
 */
router.get("/commits/:username", listCommits);

module.exports = router;