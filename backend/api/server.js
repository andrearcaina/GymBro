import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

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