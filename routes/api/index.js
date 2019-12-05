var axios = require('axios');

const router = require('express').Router();

const id = '3e42b7b6df8bc63f3cb4';
const sec = '977293076eb46d2f70ab6270c60157860be8b34e';

const params = `?client_id=${id}&client_secret=${sec}`;
const latest = `${params}&order=asc&sort=updated`;

router.get('/api/:username', (req, res) => {
    console.log(`GET /${req.params.username}`);
    res.json(getProfile(req.params.username));
  })

function getUserRepos(username) {
  return axios
    .get(`http://api.github.com/users/${username}/repos${latest}`)
    .then(user => user.data);
}

function getProfile(username) {
  return axios
    .get(`http://api.github.com/users/${username}${params}`)
    .then(user => user.data);
}

function getRepos(username, quantity = 100) {
  return axios.get(
    `http://api.github.com/users/${username}/repos${params}&per_page=${quantity}`
  );
}

function getCommits(username) {
  return axios
    .get(`https://github-contributions-api.now.sh/v1/${username}`)
    .then(user => {
      return user.data.years[0].total;
    });
}

function getStarCount(repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos, username) {
  let followers = profile.followers;
  let totalStars = getStarCount(repos);
  let repos2 = profile.public_repos;

  return (followers * 1.5) * 10 + (totalStars * 0.75) * 10 + (repos2 * 0.4) * 10
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios.all([getProfile(player), getRepos(player), getCommits(player)
  ]).then(function(data) {
    let profile = data[0];
    let repos = data[1];
    let commits = data[2].years[0].total;
    console.log(profile, repos, commits)

    return {
      profile: profile,
      score: calculateScore(profile, repos, commits)
    };
  });
}

function sortPlayers(players) {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
}

function battle(players) {
  return axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}

module.exports = router;
