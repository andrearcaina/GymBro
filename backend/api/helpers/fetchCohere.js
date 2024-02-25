// function fetching workout routine plan
import { generateMeals, generateWorkout } from '../utils/parse.js';

export const fetchWorkoutRoutine = async (goal) => {
    const stringGoal = goal.toString();

    const response = await fetch('https://api.cohere.ai/v1/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.COHERE_API_TOKEN}`,
        },
        body: JSON.stringify({
            model: 'command',
            message: `make me a routine based off of this format, do this for day 1 all the way to day 5. Follow this format everytime and do not include any other text besides this! Do this fast, make it short.
"Day 1: 
Warm-up: 10 mins of light stretches: neck rolls, shoulder circles, arm swings, leg swings, ankle rotations, Cardio: 40 mins of moderate-intensity cardio (e.g. brisk walking, cycling), 
1. {Muscle Group}: 3 sets of 8-12 reps of {Workout Type}, and {Workout Type} 
2. {Muscle Group}: 3 sets of 8-12 reps of {Workout Type}, and {Workout Type}"
            `,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    //const workout = generateWorkout(data.text);
    return data;
};

// function api fetching for meal plan
export const fetchMealPlan = async (goal, dietRestrictions) => {
    const stringRestrictions = dietRestrictions.toString();
    const stringGoal = goal.toString();

    const response = await fetch('https://api.cohere.ai/v1/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.COHERE_API_TOKEN}`,
        },
        body: JSON.stringify({
            model: 'command',
            message: `IN THE FOLLOWING STATEMENTS, DO NOT INCLUDE THE RECIPE AND INSTRUCTIONS ON HOW TO 
            CREATE THE MEAL, BUT INSTEAD INCLUDE THE MEAL NAME ITSELF! THIS IS IMPORTANT.
            AN EXAMPLE WOULD BE:
            "Day 1:
            Breakfast: Scrambled Eggs and Whole Wheat Toast (300 calories).
            Lunch: Tuna Salad (200 calories).
            Dinner: Turkey Bolognese with Zucchini Noodles (350 calories)."
            USING THE EXAMPLE ABOVE, MAKE SURE YOU GENERATE EXACTLY LIKE ABOVE. SO,
            give me a 5 day (like Day 1, Day 2, Day 3, Day 4, Day 5) diet/meal plan with a format
            like = Breakfast, Lunch, Dinner, then Total calories, and ${stringRestrictions} dietary 
            restrictions tailored towards a goal of ${stringGoal}. 
            MAKE SURE YOU Include the calories per meal.`,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const meals = generateMeals(data.text);
    console.log(meals);
    return meals;
};