//const User = require('../user/users');

var mongoose = require('mongoose');

var quizSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category : String,  
  title: String,
  linkurl : String,
  level: Number,
  active: Boolean,
  rank: Number,
  created: { type: Date, default: Date.now },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('QuizMaster', quizSchema);
