const { Data } = require("../models");

const getSavedData = (req, res) => {
  Data.find({})
    .then(dbPlayerData => {
      const sortByScores = dbPlayerData.sort((a, b) => {
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
