import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { fetchChatRequest } from "./helpers/cohere.js"
dotenv.config();

const app = express();
const port = 5000; 

app.use(cors());

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