import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

import hangmanRoutes from './routes/hangman.js'
import caturRoutes from './routes/catur.js'

const app  = express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Game_Web')

app.use('/hangman', hangmanRoutes)
app.use('/catur', caturRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
    

