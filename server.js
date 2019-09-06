const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profiles = require('./routes/api/profiles')
const games = require('./routes/api/games');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/games', games);
app.use('/api/profiles', profiles);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on PORT ${port}`));