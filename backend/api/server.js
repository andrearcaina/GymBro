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
    const test = `Here is a five-day workout routine towards the goal of weight loss with different exercises each day: \n\nDay 1:\nWarm-up: 15 minutes of light cardio exercises like jogging in place, jumping jacks, or cycling at a slow pace.\nCardio: 45 minutes of intense cardio workout like running, interval training, or aerobic dancing.\nExercise: \nChest and Back: \n- Bench press: 3 sets of 12-15 reps with a 3-6 kg dumbbell\n- Pull-ups: 3 sets of 8-10 reps \n- Seated cable row: 2 sets of 12-15 reps\n\nDay 2:\nWarm-up: 15 minutes of dynamic stretching exercises like leg swings, arm circles, and torso twists.\nCardio: 45 minutes of moderate-intensity cardio workout like brisk walking, hiking, or swimming.\nExercise: \n Legs and Arms: \n- Squats: 3 sets of 12-15 reps with a weighted bar or dumbbells\n- Lunges: 3 sets of 12-15 reps per leg\n- Bicep curls: 3 sets of 12-15 reps with a dumbbell\n- Deadlifts: 3 sets of 8-10 reps with a weighted bar or dumbbells\n\nDay 3:\nWarm-up: 15 minutes of cardio exercises like jumping rope or high-intensity interval training (HIIT).\nCardio: 45 minutes of intense cardio workout like sprinting or uphill cycling.\nExercise: \n Shoulder and Abs:\n- Overhead press: 3 sets of 12-15 reps with a 3-6 kg dumbbell\n- Bench press: 3 sets of 12-15 reps with a 3-6 kg dumbbell\n- Russian twists: 3 sets of 12-15 reps\n- Leg raises: 3 sets of 12-15 reps\n\nDay 4:\nWarm-up: 15 minutes of light cardio and stretching exercises to loosen the muscles.\nCardio: 45 minutes of moderate-intensity cardio workout like cycling or brisk walking.\nExercise: \n Glutes and Thighs: \n- Squats: 3 sets of 12-15 reps\n- Leg press: 3 sets of 12-15 reps\n- Deadlifts: 3 sets of 8-10 reps\n- Lunges: 3 sets of 12-15 reps per leg\n\nDay 5:\nWarm-up: 20 minutes of light cardio and dynamic stretching to activate the muscles.\nCardio: 50 minutes of intense cardio workout like sprinting or HIIT training.\nExercise: Full-body workout with less emphasis on reps and more on weight lifting: \n\n- Deadlifts: 3 sets of 8-10 reps with a weighted bar\n- Bench press: 3 sets of 8-10 reps with a 5-8 kg dumbbell\n- Pull-ups: 3 sets of 6-8 reps\n- Squats: 3 sets of 8-10 reps with a weighted bar\n\nRemember to consult a doctor or certified trainer before starting a new workout regimen. The suitable intensity and weight of the exercises depend on your regular activity level and current fitness condition. Progression to higher weights or intensity should be gradual to avoid injury and to achieve optimal results. \n\nLet me know if you would like me to generate more alternative exercises for different days or provide more details on weight loss goals and diet plans to complement this workout routine.`;
    generateWorkout(test);
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