var express = require('express');
var router = express.Router();
var bookCtrl = require('../controllers/book.contrller');

/* GET ALL BOOKS */
router.get('/', bookCtrl.findAll);

/* GET SINGLE BOOK BY ID */
router.get('/:id', bookCtrl.findOne);

/* SAVE BOOK */
router.post('/', bookCtrl.create);

/* UPDATE BOOK */
router.put('/:id', bookCtrl.update);

/* DELETE BOOK */
router.delete('/:id', bookCtrl.delete);

module.exports = router;
