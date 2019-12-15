const axios = require("axios");
const router = require("express").Router();

const { 
  showUser,
  listRepos,
  getUserRepos,
  getCommits,
  getManuel,
  sortPlayers
} = require("../../controllers/user-controller");

/**
 * Route to retrieve user profile
 * GET /api/:username
 */
router.get("/:username", showUser);

/**
 * Route to retrieve user repos
 * GET /api/repos/:username
 */
router.get("/repos/:username", listRepos);

/**
 * Route to compare two user's profiles
 * GET /api/:username1?/:username2?
 */
router.get("/:username1?/:username2?", (req, res) => {
  axios
    .all([getManuel(req.params.username1), getManuel(req.params.username2)])
    .then(
      axios.spread((profile1, profile2) => {
        res.json(sortPlayers([profile1, profile2]));
      })
    );
});

/**
 * Route to retrieve user commits (deprecated?)
 * GET /api/commits/:username
 */
router.get("/commits/:username", (req, res) => {
  console.log(`GET /api/commits/${req.params.username}`);
  getCommits(req.params.username).then(commits => {
    res.json(commits);
  });
});

module.exports = router;