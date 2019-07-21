const express = require('express');
const notes = require('../controllers/note.controller');
const router = express.Router();


router.get('/', notes.findAll);
router.get('/:noteId', notes.findOne);
router.post('/', notes.create);
router.put('/:noteId', notes.update);
router.delete('/:noteId', notes.delete);

module.exports = router;

