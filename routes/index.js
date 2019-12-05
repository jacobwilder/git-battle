var axios = require('axios');
const router = require('express').Router();
const path = require('path');
//const apiRoutes = require('./api');

//router.use('/api', apiRoutes);

const id = '3e42b7b6df8bc63f3cb4';
const sec = '977293076eb46d2f70ab6270c60157860be8b34e';

const params = `?client_id=${id}&client_secret=${sec}`;
const latest = `${params}&order=asc&sort=updated`;

router.get('/api/:username', (req, res) => {
    console.log(`GET /api/${req.params.username}`);
    getManuel(req.params.username)
    .then(profile => {
        console.log(profile);
        res.json(profile);
    });
});

router.get('/api/commits/:username', (req, res) => {
    console.log(`GET /api/commits/${req.params.username}`);
    getCommits(req.params.username)
    .then(commits => {
        console.log(commits);
        res.json(commits);
    });
});

router.get('/api/repos/:username', (req, res) => {
    console.log(`GET /api/repos/${req.params.username}`);
    getUserRepos(req.params.username)
    .then(repos => {
        console.log(repos);
        res.json(repos);
    });
});

// router.get('/api/:username1/:username2', (req, res) => {
//     console.log(`GET /api/battle/${req.params.username1}/${req.params.username2}`);
//     battle([req.params.username1, req.params.username2])
//       .then(profile => {
//         console.log(players);
//         res.json(players);
//       });
// });
    
    // this is for production use only, if no API routes are hit then serve up the React frontend
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
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
      console.log(user.data.years[0].total);
      return user.data.years[0].total;
    });
}

function getManuel(username) {
    return axios.all(
        [
            getProfile(username), 
            getUserRepos(username),
            getCommits(username)
        ]
    )
      .then(axios.spread((profile, repos, commits) => {
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
        //   manuel.repos = repos;

          //console.log(manuel);
          return manuel;
      }))
}

function getRepos(username, quantity = 100) {
  return axios.get(
    `http://api.github.com/users/${username}/repos${params}&per_page=${quantity}`
  );
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
  return axios.all([getProfile(player), getRepos(player), getCommits(player)]).then(function (data) {
    let profile = data[0];
    let repos = data[1];
    let commits = data[2];
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
