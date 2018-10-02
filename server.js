const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

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


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
