const {Schema, model} = require("mongoose");

const workoutSchema = new Schema ({
    day: {
        type:Date,
        default:new Date().setDate(new Date().getDate())
        },
    exercises: [{
        type: {
            type: String,
            // required: "Select type"
        },
        name: {
            type: String,
            trim: true,
            // required: "Please name this exercise"
        },
        duration: {
            type: Number,
            // required: "How long was this exercise?"
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]
})

workoutSchema.methods.totalDuration = function () {
    const durationTotal = this.exercises.reduce((accum, cv)=>{
       return accum + cv.duration
    }, 0);
    return durationTotal;
}

const Workout = model ("Workout", workoutSchema);

module.exports = Workout;