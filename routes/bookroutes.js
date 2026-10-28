const express = require('express');
const {addBook, getBooks, updateBook} = require('../controllers/bookController')
const router = express.Router();

router.post('/', addBook);
router.get('/', getBooks);
router.patch('/:id', updateBook);
module.exports = router;