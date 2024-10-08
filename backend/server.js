const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware');

connectDB()

const port = process.env.PORT || 5000

const app = express();

app.use(cors());    
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalsRoutes'));

app.use(errorHandler)

app.listen(port, ()=>console.log(`Listening on port ${port}`))