const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const noteController = require('../controllers/noteController');

router.use(authMiddleware);

router.get('/', noteController.getAllNotes);
router.post('/', noteController.createNote);
router.put('/:id', noteController.updateNote); 
router.delete('/:id', noteController.deleteNote);

module.exports = router;
