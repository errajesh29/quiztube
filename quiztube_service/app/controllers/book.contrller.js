var express = require('express');
var mongoose = require('mongoose');
var Book = require('../models/book.model');

/* GET ALL BOOKS */
module.exports.findAll = function(req, res, next) {
    console.log('find all book called');
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
}

/* GET SINGLE BOOK BY ID */
module.exports.findOne = function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

/* SAVE BOOK */
module.exports.create = function(req, res, next) {
    console.log("create book called" + JSON.stringify(req.body));
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    return res.json(post);
  });
}

/* UPDATE BOOK */
module.exports.update = function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

/* DELETE BOOK */
module.exports.delete = function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}
