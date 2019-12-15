const axios = require("axios");
const router = require("express").Router();

const id = process.env.GITHUB_ID;
const sec = process.env.GITHUB_SEC;

const params = `?client_id=${id}&client_secret=${sec}`;
const latest = `${params}&order=asc&sort=updated`;

/**
 * Route to retrieve user profile
 * GET /api/:username
 */
router.get("/:username", (req, res) => {
  console.log(`GET /api/${req.params.username}`);
  getManuel(req.params.username).then(profile => {
    res.json(profile);
  });
});

/**
 * Route to retrieve user commits
 * GET /api/commits/:username
 */
router.get("/commits/:username", (req, res) => {
  console.log(`GET /api/commits/${req.params.username}`);
  getCommits(req.params.username).then(commits => {
    res.json(commits);
  });
});

/**
 * Route to retrieve user repos
 * GET /api/repos/:username
 */
router.get("/repos/:username", (req, res) => {
  console.log(`GET /api/repos/${req.params.username}`);
  getUserRepos(req.params.username).then(repos => {
    res.json(repos);
  });
});

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

function getUserRepos(username) {
  return axios
    .get(`http://api.github.com/users/${username}/repos${latest}`)
    .then(user => user.data);
}

function getProfile(username) {
  return axios
    .get(`http://api.github.com/users/${username}${params}`)
    .then(user => {
      return user.data;
    });
}

function getCommits(username) {
  return axios
    .get(`https://github-contributions-api.now.sh/v1/${username}`)
    .then(user => {
      return user.data.years[0].total;
    });
}

function getManuel(username) {
  return axios
    .all([getProfile(username), getUserRepos(username), getCommits(username)])
    .then(
      axios.spread((profile, repos, commits) => {
        let manuel = {};

        manuel.created_at = profile.created_at;
        manuel.avatar_url = profile.avatar_url;
        manuel.login = profile.login;
        manuel.html_url = profile.html_url;
        manuel.login = profile.login;
        manuel.name = profile.name;
        manuel.location = profile.location;
        manuel.company = profile.company;
        manuel.bio = profile.bio;
        manuel.blog = profile.blog;
        manuel.public_repos = profile.public_repos;
        manuel.public_gists = profile.public_gists;
        manuel.followers = profile.followers;
        manuel.following = profile.following;
        manuel.commits = commits;

        manuel.repos = [];

        repos.forEach(repo => {
          let kevin = {};
          kevin.name = repo.name;
          kevin.html_url = repo.html_url;
          kevin.description = repo.description;
          kevin.stargazers_count = repo.stargazers_count;
          kevin.forks_count = repo.forks_count;
          kevin.language = repo.language;
          manuel.repos.push(kevin);
        });

        manuel.score = calculateScore(manuel);
        return manuel;
      })
    );
}

function getRepos(username, quantity = 100) {
  return axios.get(
    `http://api.github.com/users/${username}/repos${params}&per_page=${quantity}`
  );
}

function getStarCount(repos) {
  return repos.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(user) {
  let followers = user.followers;
  let repos2 = user.public_repos;
  let totalStars = getStarCount(user.repos);
  let commits2 = user.commits;


  return (
    (followers * 1.25) * 10 +
    (totalStars * 0.75) * 10 +
    (repos2 * 0.5) * 10 +
    (commits2 * 0.1)
  );
}

function handleError(error) {
  console.warn(error);
  return null;
}

function sortPlayers(players) {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
}

module.exports = router;