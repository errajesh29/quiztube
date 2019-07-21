//const QuizMaster = require('./quizMaster');

var mongoose = require('mongoose');
var quizSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type : Boolean, //either text or image type
  description: String, // quiz description and option a,b,c,d
  a: String,
  b: String,
  c: String,
  d: String,
  e: String,
  answers: {
    A: '',
    B: '',
    C: '',
    D : '',
    E : ''
  },
  created: { type: Date, default: Date.now },
  _master: {type: mongoose.Schema.Types.ObjectId, ref: 'QuizMaster'}
});

module.exports = mongoose.model('QuizDetails', quizSchema);
