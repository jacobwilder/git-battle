const { Data } = require("../models");

/**
 * Retrieve Data
 * 
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
const getSavedData = (req, res) => {
  Data.find({})
    .then(dbPlayerData => {
      const onlyHighScores = getOnlyHighScores(dbPlayerData)
      const sortByScores = onlyHighScores.sort((a, b) => {
        return b.score - a.score;
      });
      res.json(sortByScores);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

/**
 * Add new Data
 * 
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
const saveData = (req, res) => {
  Data.create(req.body)
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

/**
 * Retrieve only the high scores
 * 
 * @param {Array<Object>} arr an array of high-scoring users
 * @return {Array<Object>} an array of unique high-scoring users 
 */
const getOnlyHighScores = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const foundUser = newArr.find(user => user.userName === arr[i].userName);
    if (!foundUser) {
      newArr.push(arr[i]);
    } else {
      const foundIndex = newArr.findIndex(
        user => user.userName === arr[i].userName && user.score < arr[i].score
      );
      newArr[foundIndex] = arr[i];
    }
  }
  return newArr;
};

module.exports = {
  getSavedData,
  saveData
};
