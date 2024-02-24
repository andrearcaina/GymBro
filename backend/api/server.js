import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { fetchWorkoutRoutine } from "./helpers/cohere.js"
import { fetchMealPlan } from "./helpers/cohere.js"
dotenv.config();

const app = express();
const port = 5000; 

app.use(cors());

app.get('/api', (req, res) => {
    res.send({"Hello": "World"});
});

app.get("/api/workout/:goal", (req, res) => {
    const goal = req.params.goal.toString();

    if (!goal) {
        res.status(400).json({ error: "Invalid goal" })
        return
      }

    fetchWorkoutRoutine(goal)
        .then((response) => {
          res.json(response)
        })
        .catch((error) => {
          res.status(500).json({ error: error.name })
        })
});

app.get("/api/mealPlan/:goal/:dietRestrictions", (req, res) => {
    const goal = req.params.goal.toString();
    const dietRestrictions = req.params.dietRestrictions.toString();

    if (!goal || !dietRestrictions) {
        res.status(400).json({ error: "Invalid goal or dietary restriction" })
        return
      }

      fetchMealPlan(goal, dietRestrictions)
        .then((response) => {
          res.json(response)
        })
        .catch((error) => {
          res.status(500).json({ error: error.name })
        })
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});