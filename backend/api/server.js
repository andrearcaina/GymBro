import express from 'express';
import dotenv from "dotenv"
import { fetchChatRequest } from "./helpers/cohere.js"

const app = express();
const port = 5000; 

app.get('/api', (req, res) => {
    res.send({"Hello": "World"});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get(
    "/chatreq",
    async (req, res) => {  
      fetchChatRequest()
        .then((response) => {
          res.json(response)
        })
        .catch((error) => {
          res.status(500).json({ error: error.name })
        })
});