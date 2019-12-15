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
  getManuel(req.params.username).then(profile => {
    res.json(profile);
  });
};

/**
 * Retrieve User Repos
 * 
 * @param {string} req.params.username GitHub username to search
 */
const listRepos = (req, res) => {
  console.log(`listRepos - GET /api/repos/${req.params.username}`);
  getUserRepos(req.params.username).then(repos => {
    res.json(repos);
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
    .get(`http://api.github.com/users/${username}/repos${latest}`)
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
const getManuel = username => {
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
  listRepos,
  getUserRepos,
  getCommits,
  getManuel,
  sortPlayers
};