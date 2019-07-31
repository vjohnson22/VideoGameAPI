const mongoose = require('../connection')
const Schema = mongoose.Schema

const HeadCoachSchema = new Schema ({
    rank: Number,
    school: String,
    coach: String,
    totalPay: Number,
    AsstPayTotal: Number,
    schoolBuyout: Number
})

module.exports = mongoose.model('HeadCoach', HeadCoachSchema)

