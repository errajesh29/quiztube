var express = require('express');
var mongoose = require('mongoose');
var QuizMaster = require('../../models/quiz/quizMaster');

/* GET ALL QUIZ LIST*/
module.exports.findAll = function(req, res, next) {
  console.log('find all quiz called');
  QuizMaster.find(function (err, quizzes) {
    if (err) return next(err);
    res.json(quizzes);
  });
}

/* GET SINGLE QUIZ BY ID */
module.exports.findOne = function(req, res, next) {
  QuizMaster.findById(req.params.id, function (err, quiz) {
    if (err) return next(err);
    res.json(quiz);
  });
}

/* SAVE QUIZ MATSER */
module.exports.create = function(req, res, next) {
  console.log("create quiz called" + JSON.stringify(req.body));
  QuizMaster.create(req.body, function (err, quiz) {
    if (err) return next(err);
    return res.json(quiz);
  });
}

/* UPDATE QUIZ MASTER */
module.exports.update = function(req, res, next) {
  QuizMaster.findByIdAndUpdate(req.params.id, req.body, function (err, quiz) {
    if (err) return next(err);
    res.json(quiz);
  });
}

/* DELETE QUIZ MASTER */
module.exports.delete = function(req, res, next) {
  QuizMaster.findByIdAndRemove(req.params.id, req.body, function (err, quiz) {
    if (err) return next(err);
    res.json(quiz);
  });
}
