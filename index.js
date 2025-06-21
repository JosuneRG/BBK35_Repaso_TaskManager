const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');
const { dbConnection } = require('./config/config')

require("dotenv").config();
const PORT = process.env.PORT || 3001

const app = express();
app.use(express.json());
dbConnection();

app.use('/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));