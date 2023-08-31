const mongoose = require('mongoose')


const questSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add quest title']
    },

}, {
    timestamps: true
})


module.exports = mongoose.model('Quest', questSchema)