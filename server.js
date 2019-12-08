const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This is for production use only
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);


/*ERROR FOUND HERE, when run all functions fail with err 500s & proxy errors

db.sequelize.sync({force:true}).then(function() {
  db.result.bulkCreate([{
    winner_name: 'joe',
    winner_score: 3,
    loser_name: 'bob',
    loser_score: 0
  }, {
    winner_name: 'joe',
    winner_score: 3,
    loser_name: 'oob',
    loser_score: 1
  }, {
    winner_name: 'foo',
    winner_score: 5,
    loser_name: 'bar',
    loser_score: 1
  }, {
    winner_name: 'foo',
    winner_score: 5,
    loser_name: 'bob',
    loser_score: 0
  }]);

  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});

*/

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
