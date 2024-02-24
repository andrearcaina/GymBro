// function fetching workout routine plan
export const fetchWorkoutRoutine = async(goal) => {
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
    console.log(data);
    return data;
};

// function api fetching for meal plan
export const fetchMealPlan = async(goal, dietRestrictions) => {
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
            message: `give me a 5 day diet/meal plan with ${stringRestrictions} dietary restrictions tailored towards ${stringGoal}. Include the calories per meal.`,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
};