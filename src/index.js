const express = require('express');
const app = express();

app.use(express.json());

const routes = require('./routes/routes');
app.use('/api', routes);


// database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/watchDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(() => console.error('Could not connect to MongoDB...'));



app.listen(3000, () => console.log('Listening on port 3000...'));