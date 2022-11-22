const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const Member = mongoose.model('Member', MemberSchema)

module.exports = Member