const express = require("express");
const path = require("path");
const router = express.Router();
const db = require("../models");

router.get("/exercise", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.get("/api/workouts/range", async (req, res) => {
    try {
        const data = await db.Workout.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.get("/api/workouts", async (req, res)=>{
    try {
        const data = await db.Workout.find({});

        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.put("/api/workouts/:id", async (req, res)=>{
    try {
        const data = await db.Workout.findByIdAndUpdate(req.params.id,
            {
                $push: {exercises:req.body}
            });
            res.json(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.post("/api/workouts", async (req,res)=>{
    try {
        const data = await db.Workout.create(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = router;