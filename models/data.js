const mongoose = require('mongoose');

const { Schema } = mongoose;

const DataSchema = new Schema({
  userName: {
    type: String
  },
  score: {
    type: Number
  },
  repos: {
    type: Number
  },
  commits: {
    type: Number
  }
});

const Data = mongoose.model('data', DataSchema);

module.exports = Data;
