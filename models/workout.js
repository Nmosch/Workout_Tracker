const {Schema, model} = require("mongoose");

const workoutSchema = new Schema ({
    day: Date,
    exercises: [{
        type: {
            type: String,
            required: "Select type"
        },
        name: {
            type: String,
            trim: true,
            required: "Please name this exercise"
        },
        duration: {
            type: Number,
            required: "How long was this exercise?"
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
    }]
})

const Workout = model ("Workout", workoutSchema);

module.exports = Workout;