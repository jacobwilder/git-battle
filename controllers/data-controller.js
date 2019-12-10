const { Data } = require("../models");


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

const saveData = (req, res) => {
  Data.create(req.body)
    .then(dbPlayerData => res.json(dbPlayerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};



module.exports = {
  getSavedData,
  saveData
};
