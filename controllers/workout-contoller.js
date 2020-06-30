const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts/range", async (req, res) => {
    try {
        const data = await db.Workout.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = router;