var express = require('express');
var router = express.Router();
var quizCtrl = require('../../controllers/quiz/quizMasterCtrl');

/* GET ALL QUIZ */
router.get('/', quizCtrl.findAll);

/* GET SINGLE QUIZ BY ID */
router.get('/:id', quizCtrl.findOne);

/* SAVE BOOK */
router.post('/', quizCtrl.create);

/* UPDATE QUIZ */
router.put('/:id', quizCtrl.update);

/* DELETE QUIZ */
router.delete('/:id', quizCtrl.delete);

module.exports = router;
