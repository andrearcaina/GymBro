// function fetching workout routine plan
import { generateMeals } from '../utils/script.js';

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
            message: `give me a workout routine for 5 days a week tailored towards ${stringGoal} with no rest days`,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    //scrapeDescription(data.text);
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
    return meals;
};