const {Schema, model} = require("mongoose");

const workoutSchema = new Schema ({
    
})

const Workout = model ("Workout", workoutSchema);

module.exports = Workout;