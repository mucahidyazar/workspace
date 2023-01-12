const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

app.use(cors());
app.use(express.json());

const exercisesRoutes = require('./routes/exercises');
const usersRouters = require('./routes/users');

app.use('/exercises', exercisesRoutes);
app.use('/users', usersRouters);

app.listen(port, () => {
    console.log('Server is running on port : ' + port);
})