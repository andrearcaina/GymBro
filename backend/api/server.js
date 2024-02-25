import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { fetchWorkoutRoutine, fetchMealPlan } from "./helpers/fetchCohere.js";
import { generateMeals, generateWorkout } from './utils/parse.js';

dotenv.config();

const app = express();
const port = 5000; 

app.use(cors());

app.get('/api', (req, res) => {
    res.status(200).json({"Hello": "World"});
});

app.get('/api/testgenerationmeals', (req, res) => {
    const test = `Certainly! Here is a diet/meal plan for five days with meals tailored towards a weight loss goal, excluding recipes, and including the calories per meal and total calories per day: \n\nDay 1:\n\nBreakfast: 2 Scrambled Eggs and Whole Wheat Toast (300 calories)\nLunch: Tuna Salad (200 calories)\nDinner: Turkey Bolognese with Zucchini Noodles (350 calories)\nTotal Calories for today: 300+200+350 = 750 \n\nDay 2:\n\nBreakfast: Blueberry Smoothie (200 calories) \nLunch: Chicken Lettuce Wraps (350 calories)\nDinner: Baked Salmon with Roasted Broccoli (250 calories)\nTotal Calories for today: 200+350+250 = 900 \n\nDay 3:\n\nBreakfast: Avocado Toasts (300 calories) \nLunch: Greek Salad (200 calories)\nDinner: Turkey Chili with Beans (400 calories)\nTotal Calories for today: 300+200+400 = 900 \n\nDay 4:\n\nBreakfast: Oatmeal with Fruit (250 calories) \nLunch: Steak and Black Bean Salad (400 calories)\nDinner: Chicken and Vegetable Stir-Fry (300 calories)\nTotal Calories for today: 250+400+300 = 1050 \n\nDay 5:\n\nBreakfast: Egg White Scramble (200 calories)\nLunch: Hummus and Vegetable Sandwich (400 calories)\nDinner: Lentil Soup (250 calories)\nTotal Calories for today: 200+400+250 = 950 \n\nThis meal plan provides a range of nutritious meals that are suitable for weight loss, with each day's meals totaling between 750 and 950 calories. \n\nPlease note that depending on your weight loss goals, nutritional needs, and preferences, you may want to consider consulting with a healthcare professional or a registered dietitian to determine the best meal plan for you. They can provide more precise and personalized guidance based on your individual circumstances.`;
    const dict = generateMeals(test);
    res.send(dict);
});

app.get('/api/testgenerationworkout', (req, res) => {
    const test1 = `Here is a weight-loss routine for you formatted for day 1 to day 5. \n\nDay 1:\nWarm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.\nCardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling).\n1. Quadriceps: 3 sets of 8-12 reps of squats, and leg press\n2. Chest: 3 sets of 8-12 reps of bench press, and dumbbell flies\n\nDay 2:\nWarm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.\nCardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling).\n1. Hamstrings: 3 sets of 8-12 reps of deadlifts, and leg curls\n2. Back: 3 sets of 8-12 reps of pulldowns, and lat-pulldowns\n\nDay 3:\nWarm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.\nCardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling).\n1. Shoulder: 3 sets of 8-12 reps of shoulder press, and side lateral raises\n2. Arm: 3 sets of 8-12 reps of bicep curls, and hammer curls\n\nDay 4:\nWarm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.\nCardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling).\n1. Gluteal: 3 sets of 8-12 reps of lunges, and leg press\n2. Back: 3 sets of 8-12 reps of pulldowns, and lat-pulldowns\n\nDay 5:\nWarm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations.\nCardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling).\n1. Calves: 3 sets of 8-12 reps of calf raises, and standing calf raises\n2. Triceps: 3 sets of 8-12 reps of bench dip, and cable pushdowns\n\nPlease note that this routine is just a sample and may not be suited for everyone, consider customizing it to fit your needs and fitness level. It is also essential to ensure you are in proper form and to seek a doctor if you experience any injuries or discomfort.`;
    const test = `Here is a five-day workout routine based on the format you provided: \n\nDay 1: \n Warm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations. Cardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling) \n\n1. Chest/Back: 3 sets of 8-12 reps of bench press, and lat-pulldowns \n\n2. Legs: 3 sets of 8-12 reps of squat, and leg press \n\nDay 2: \n Warm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations. Cardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling) \n\n1. Shoulder/Arm: 3 sets of 8-12 reps of bench press, and lat-pulldowns \n\n2. Legs: 3 sets of 8-12 reps of squat, and leg press \n\nDay 3: \n Warm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations. Cardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling) \n\n1. Shoulder/Arm: 3 sets of 8-12 reps of bench press, and lat-pulldowns \n\n2. Legs: 3 sets of 8-12 reps of squat, and leg press \n\nDay 4: \n Warm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations. Cardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling) \n\n1. Chest/Back: 3 sets of 8-12 reps of bench press, and lat-pulldowns \n\n2. Legs: 3 sets of 8-12 reps of squat, and leg press \n\nDay 5: \n Warm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations. Cardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling) \n\n1. Chest/Back: 3 sets of 8-12 reps of bench press, and lat-pulldowns \n\n2. Legs: 3 sets of 8-12 reps of squat, and leg press \n\nThese exercises, along with the warm-up and cardio, will help ensure a well-rounded workout that targets different muscle groups and sheds light on the importance of incorporating different exercises to maximize gains. \n\nRemember to adjust the levels of intensity, workout types, or number of reps to suit your needs and progress over time. Consult a fitness professional for personalized advice.`;
    generateWorkout(test1);
    res.send({ "Test": "Gen sucess"})
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

    console.log("fetching data");
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