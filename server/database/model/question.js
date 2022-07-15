const mongoose = require('mongoose');
const TeamAnswer = require('./teamAnswer');

//Create schema
const questionScheme = new mongoose.Schema({
    Task: {
        type: String,
        // required: true,
    },
    answer: {
        type: String,
        // required: true,
    },
    categorie_name: {
        type: String,
        // required: true
    },
    team_answers: {
        type: [{type: TeamAnswer, ref: "TeamAnswer"}],
    }
});

//Create model
mongoose.model("Question", questionScheme);

module.exports = questionScheme;
