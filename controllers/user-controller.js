const axios = require("axios");

const id = process.env.GITHUB_ID;
const sec = process.env.GITHUB_SEC;

const params = `?client_id=${id}&client_secret=${sec}`;
const latest = `${params}&order=asc&sort=updated`;

/**
 * Retrieve User Profile
 * 
 * @param {string} req.params.username GitHub username to search
 */
const showUser = (req, res) => {
  console.log(`showUser - GET /api/${req.params.username}`);
  getPlayer(req.params.username).then(profile => {
    res.json(profile);
  });
};

/**
 * Retrieve Two User Profiles
 * 
 * @param {string} [req.params.username1] 1st GitHub username to search
 * @param {string} [req.params.username2] 2nd GitHub username to search
 */
const listTwoUsers = (req, res) => {
  axios.all([getPlayer(req.params.username1), getPlayer(req.params.username2)])
    .then(
      axios.spread((profile1, profile2) => {
        res.json(sortPlayers([profile1, profile2]));
      })
    );
};

/**
 * Retrieve User Repos
 * 
 * @param {string} req.params.username GitHub username to search
 */
const listRepos = (req, res) => {
  console.log(`listRepos - GET /api/user/repos/${req.params.username}`);
  getUserRepos(req.params.username).then(repos => {
    res.json(repos);
  });
};

/**
 * Retrieve Total Number of Commits
 * 
 * @param {string} req.params.username GitHub username to search
 */
const listCommits = (req, res) => {
  console.log(`listCommits - GET /api/commits/${req.params.username}`);
  getCommits(req.params.username).then(commits => {
    res.json(commits);
  });
};

/**
 * Retrieve User Repositories from GitHub 
 * 
 * @param {string} username GitHub username to look up
 * @return {Object} 
 */
const getUserRepos = username => {
  return axios
    .get(`http://api.github.com/users/${username}/repos`)
    .then(user => user.data);
};

/**
 * Retrieve User Profile from GitHub 
 * 
 * @param {string} username GitHub username to look up
 * @return {Object} 
 */
const getProfile = username => {
  return axios
    .get(`http://api.github.com/users/${username}${params}`)
    .then(user => {
      return user.data;
    });
};

/**
 * Retrieve User Total Commits
 * 
 * @param {string} username GitHub username to look up
 * @return {number} 
 */
const getCommits = username => {
  return axios
    .get(`https://github-contributions-api.now.sh/v1/${username}`)
    .then(user => {
      return user.data.years[0].total;
    });
};

/**
 * Retrieve User Profile, Repositories, and Total Commits
 * 
 * @param {string} username GitHub username to look up
 * @return {Object}
 */
const getPlayer = username => {
  return axios
    .all([getProfile(username), getUserRepos(username), getCommits(username)])
    .then(
      axios.spread((profile, repos, commits) => {
        let player = {};

        // TODO: refactor this doggerel
        player.created_at = profile.created_at;
        player.avatar_url = profile.avatar_url;
        player.login = profile.login;
        player.html_url = profile.html_url;
        player.login = profile.login;
        player.name = profile.name;
        player.location = profile.location;
        player.company = profile.company;
        player.bio = profile.bio;
        player.blog = profile.blog;
        player.public_repos = profile.public_repos;
        player.public_gists = profile.public_gists;
        player.followers = profile.followers;
        player.following = profile.following;
        player.commits = commits;

        player.repos = [];

        // TODO: refactor this doggerel
        repos.forEach(repo => {
          let playerRepo = {};
          playerRepo.name = repo.name;
          playerRepo.html_url = repo.html_url;
          playerRepo.description = repo.description;
          playerRepo.stargazers_count = repo.stargazers_count;
          playerRepo.forks_count = repo.forks_count;
          playerRepo.language = repo.language;
          player.repos.push(playerRepo);
        });

        player.score = calculateScore(player);
        return player;
      })
    );
};

/**
 * Retrieve Total Number of Repository Stars
 * 
 * @param {Array<Object>} repos Array of repo objects
 * @return {number}
 */
const getStarCount = repos => {
  return repos.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
};

/**
 * Calculate User Score
 * 
 * @param {Object} user User object for which to calculate score
 * @return {number}
 */
const calculateScore = user => {
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
};

/**
 * Sort Players by Score
 * 
 * @param {Array<Object>} players Array of player objects
 * @return {Array<Object>}
 */
const sortPlayers = players => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};

module.exports = {
  showUser,
  listTwoUsers,
  listRepos,
  listCommits
};