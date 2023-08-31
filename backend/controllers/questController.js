const asyncHandler = require('express-async-handler')


// @desc    Get Quests
// @route   GET /quests
// @access  Private
const getQuests = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Get Quests"
    })
})


// @desc    Add Quest
// @route   POST /quests
// @access  Private
const addQuest = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({
        message: "Add Quest"
    })
})


// @desc    Edit Quest
// @route   PUT /quests/:id
// @access  Private
const editQuest = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Edit Quest"
    })
})


// @desc    Delete Quest
// @route   DELETE /quests/:id
// @access  Private
const deleteQuest = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Delete Quest"
    })
})


module.exports = {
    getQuests, addQuest, editQuest, deleteQuest
}