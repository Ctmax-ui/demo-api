const mongoose = require('mongoose')
const goalScema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'please add an text value'],

    }
},
    {
        timestamps: true
    }
)

const Goal = mongoose.model('goals', goalScema)

module.exports = Goal