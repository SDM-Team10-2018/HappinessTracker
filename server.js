const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const emotions = require('./routes/api/emotions');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//DB connect
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));

app.use('/api/emotions', emotions);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server Started on port ${port}`));
