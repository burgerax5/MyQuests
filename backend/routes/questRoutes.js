const express = require('express')
const router = express.Router()

const { getQuests, addQuest, editQuest, deleteQuest } = require('../controllers/questController')


router.get('/', getQuests)
router.post('/', addQuest)
router.put('/:id', editQuest)
router.delete('/:id', deleteQuest)


module.exports = router