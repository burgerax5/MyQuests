const express = require('express')
const router = express.Router()

const { getQuests, addQuest, editQuest, deleteQuest } = require('../controllers/questController')
const { protect } = require('../middleware/offMiddleware')

router.get('/', protect, getQuests)
router.post('/', protect, addQuest)
router.put('/:id', protect, editQuest)
router.delete('/:id', protect, deleteQuest)


module.exports = router