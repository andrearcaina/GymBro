import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { fetchWorkoutRoutine, fetchMealPlan } from "./helpers/cohere-api.js";
import { generateMeals } from './utils/script.js';

dotenv.config();

const app = express();
const port = 5000; 

app.use(cors());

app.get('/api', (req, res) => {
    res.json({"Hello": "World"});
});

app.get('/api/testgenerationmeals', (req, res) => {
    const test = `Certainly! Here is a diet/meal plan for five days with meals tailored towards a weight loss goal, excluding recipes, and including the calories per meal and total calories per day: \n\nDay 1:\n\nBreakfast: 2 Scrambled Eggs and Whole Wheat Toast (300 calories)\nLunch: Tuna Salad (200 calories)\nDinner: Turkey Bolognese with Zucchini Noodles (350 calories)\nTotal Calories for today: 300+200+350 = 750 \n\nDay 2:\n\nBreakfast: Blueberry Smoothie (200 calories) \nLunch: Chicken Lettuce Wraps (350 calories)\nDinner: Baked Salmon with Roasted Broccoli (250 calories)\nTotal Calories for today: 200+350+250 = 900 \n\nDay 3:\n\nBreakfast: Avocado Toasts (300 calories) \nLunch: Greek Salad (200 calories)\nDinner: Turkey Chili with Beans (400 calories)\nTotal Calories for today: 300+200+400 = 900 \n\nDay 4:\n\nBreakfast: Oatmeal with Fruit (250 calories) \nLunch: Steak and Black Bean Salad (400 calories)\nDinner: Chicken and Vegetable Stir-Fry (300 calories)\nTotal Calories for today: 250+400+300 = 1050 \n\nDay 5:\n\nBreakfast: Egg White Scramble (200 calories)\nLunch: Hummus and Vegetable Sandwich (400 calories)\nDinner: Lentil Soup (250 calories)\nTotal Calories for today: 200+400+250 = 950 \n\nThis meal plan provides a range of nutritious meals that are suitable for weight loss, with each day's meals totaling between 750 and 950 calories. \n\nPlease note that depending on your weight loss goals, nutritional needs, and preferences, you may want to consider consulting with a healthcare professional or a registered dietitian to determine the best meal plan for you. They can provide more precise and personalized guidance based on your individual circumstances.`
    const dict = generateMeals(test);
    res.send(dict);
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