const mongoose = require('mongoose');

const postModel = mongoose.Schema({
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  vote: {
    type: Number,
  },
});

module.exports = mongoose.model('posts', postModel);
