function trimData(data) {
    return data.split('\n\nDay').join('').trim().split('\n').filter(item => item.trim() !== '');
}

function keyData(data) {
    return data.match(/Day\s\d+/g);
}

export function generateMeals(data) {
    const days = {};
    const keys = keyData(data);
    data = trimData(data);

    keys.forEach((key, index) => {
        const meals = {};

        const startIndex = (index * 4)+1;

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
    const days = {};
    const keys = keyData(data);
    data = trimData(data);

    keys.forEach((key, index) => {
        const workouts = {};
        let exercises = [];

        let index_offset = 3;

        if (data.length > 18) {
            index_offset = 4;
        }

        const startIndex = (index * index_offset) + 1;
        
        for (let i = startIndex; i < startIndex + index_offset; i++) {
            if (data[i] && (data[i].includes("Warm-up"))) {
                if (data[i + 1].includes("Cardio")) {
                    workouts["Warmup"] = data[i].slice(9, data[i].length).trim();
                    workouts["Cardio"] = data[i+1].slice(8, data[i+1].length).trim();
                } else {
                    workouts["Warmup"] = data[i].slice(9, data[i].indexOf(". Cardio")).trim();
                    workouts["Cardio"] = data[i].slice(data[i].indexOf(". Cardio")+9, data[i].length).trim();
                }
            } else if (data[i] && (data[i].includes("1.")) && (data[i+1].includes("2."))) {
                exercises.push(data[i].trim());
                exercises.push(data[i+1].trim());
                workouts["Workouts"] = exercises;
            }
        }

        days[key] = workouts;
    })

    return days;
}