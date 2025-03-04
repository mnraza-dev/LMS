import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';

const app = express();
dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
