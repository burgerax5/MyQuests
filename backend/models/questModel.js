const mongoose = require('mongoose')


const questSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please add quest title']
    },
    category: {
        type: String,
        enum: ['Commissions', 'World Quests', 'Main Quests', 'Important'],
        required: [true, 'Please select a category']
    },
    steps: [
        {
            type: String,
            maxlength: 100
        }
    ],
    description: {
        type: String,
        maxlength: 500
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Quest', questSchema)