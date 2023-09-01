const asyncHandler = require('express-async-handler')
const Quest = require('../models/questModel')
const User = require('../models/userModel')


// @desc    Get Quests
// @route   GET /quests
// @access  Private
const getQuests = asyncHandler(async (req, res) => {
    const quests = await Quest.find({ user: req.user.id })

    res.status(200).json(quests)
})


// @desc    Add Quest
// @route   POST /quests
// @access  Private
const addQuest = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const quest = await Quest.create({
        title: req.body.title,
        user: req.user.id,
        category: req.body.category,
        steps: req.body.steps,
        description: req.body.description
    })

    res.status(200).json(quest)
})


// @desc    Edit Quest
// @route   PUT /quests/:id
// @access  Private
const editQuest = asyncHandler(async (req, res) => {
    const quest = await Quest.findById(req.params.id)

    // Check if user exists
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check the ownership of the quest
    if (quest.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    if (!quest) {
        res.status(400)
        throw new Error('Quest not found')
    }

    const editedQuest = await Quest.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(editedQuest)
})


// @desc    Delete Quest
// @route   DELETE /quests/:id
// @access  Private
const deleteQuest = asyncHandler(async (req, res) => {
    const quest = await Quest.findById(req.params.id)

    // Check if user exists
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check the ownership of the quest
    if (quest.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    if (!quest) {
        res.status(400)
        throw new Error('Quest not found')
    }

    const deletedQuest = await Quest.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedQuest)
})


module.exports = {
    getQuests, addQuest, editQuest, deleteQuest
}