const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
//const postsController = require('./controllers/postsController');
//const comentariosController = require('./controllers/comentariosController');
require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/usuarios', userController);
//app.use('/posts', postsController);
//app.use('/comentarios', comentariosController);

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