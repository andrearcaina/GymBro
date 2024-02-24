export function generateMeals(data) {
    const days = {};
    const keys = data.match(/Day\s\d+/g);
    data = data.split('\n\nDay').join('').trim().split('\n').filter(item => item.trim() !== '');

    keys.forEach((key, index) => {
        const meals = {};

        const startIndex = index * 4;

        for (let i = startIndex; i < startIndex + 4; i++) {
            if (data[i] && (data[i].includes("Breakfast") || data[i].includes("Lunch") || data[i].includes("Dinner"))){
                const meal = data[i].split(":");
                const mealName = meal[0].trim();
                const mealDescription = meal[1].trim();
            
                meals[mealName] = mealDescription;
            }
        }

        days[key] = meals;
    });

    return days;
}

export function generateWorkout(data) {
    
}