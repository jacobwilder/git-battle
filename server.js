const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This is for production use only
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/git-clash';

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
