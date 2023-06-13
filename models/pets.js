const mongoose = require('mongoose');

const pets = mongoose.model('Pets', {
    nomePet: String,
    racaPet: String,
    nascimentoPet: String,
    pesoPet: String
})

module.exports = pets;