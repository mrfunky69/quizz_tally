const mongoose = require('mongoose');

//Create schema
const teamAnswerSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
    },
    given_answer: {
        type: String,
        required: true,
    },
    correct: {
        type: Boolean,
    }
});

//Create model
mongoose.model("TeamAnswers", teamAnswerSchema);

module.exports = teamAnswerSchema;
