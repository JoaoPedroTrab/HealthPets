const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const petController = require('./controllers/petsController');

require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/usuarios', userController);
app.use('/pet', petController);

mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@healthpets.pm8jjon.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Conectado ao mongoDB');
            console.log(`Servidor iniciado na porta ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    });