<h1 align="center">
  <img src="frontend/public/assets/readme_logo.png" alt="logo" width="50%" height="50%">
</h1>

<h2 align="center">My GymBro is...</h2>
<p align="center"><strong>an Express.js application powered by Next.js, designed to be a personalized companion for novice and experienced health enthusiasts alike.</strong></h4>

<hr>

## Tech Stack + How it Works

[![JAVASCRIPT](https://img.shields.io/badge/javascript-101010?style=for-the-badge&logo=javascript&logoColor=ffdd54)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![NEXT.JS](https://img.shields.io/badge/NEXT-0769AD?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TAILWINDCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) \
The frontend is developed using `JavaScript` and the Next.js framework, with Tailwind CSS as the chosen `CSS` framework.

[![JAVASCRIPT](https://img.shields.io/badge/javascript-101010?style=for-the-badge&logo=javascript&logoColor=ffdd54)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![EXPRESSJS](https://img.shields.io/badge/EXPRESS-gray?style=for-the-badge&logo=express&logoColor=white)](https://flask.palletsprojects.com/en/3.0.x/) 
[![COHERe](https://img.shields.io/badge/COHERE-white?style=for-the-badge&logo=cohere-ai&logoColor=white
)](https://pypi.org/project/beautifulsoup4/) \
The backend framework chosen for this project is Express, a `JavaScript`-based framework. Using Express, we created API endpoints to communicate with the frontend (the client).
With Cohere, these endpoints are designed to generate workout routines and meal plans for the user.

Here is a breakdown:
- The form sends route parameters to our backend.
- We fetch API endpoints from our expressjs backend to our frontend with router parameters of these inputted options
    - For example, when we fetch data from the API endpoint, we have route parameters for age, dietary restrictions, weight, and fitness goals 
- We then make a POST method to fetch a generated workout and meal plan based on these user inputted options.
- Once its generated, we parse the data and return it to the client, where our frontend renders it to the screen.

## Functionality

The GymBro team understands the challenges of starting a fitness journey, as they too faced the same roadblocks. Overwhelmed by the vast amount of information available, the team found creating a simple, tailored schedule crucial to their success.

From this experience, myGymBro was born, offering a personalized approach to fitness, catering to each user's unique goals. The app provides users with a weekly workout and meal plan schedule, tailored to their needs and preferences. Users can also look forward to delicious, nutritious recipes, recommended to keep energy levels high and support workout progress.

The GymBro team understands the challenges of starting a fitness journey, as they too faced the same roadblocks. Overwhelmed by the vast amount of information available, the team found creating a simple, tailored schedule crucial to their success.

From this experience, myGymBro was born, offering a personalized approach to fitness, catering to each user's unique goals. The app provides users with a weekly workout and meal plan schedule, tailored to their needs and preferences. Users can also look forward to delicious, nutritious recipes, recommended to keep energy levels high and support workout progress.

## What's Next!
- Optimization (Backend API Calls to Cohere)
- Providing more details for specific meals
- User accounts (tracking fitness progress)
- Images/visual changes
- More interactivity with the buttons

