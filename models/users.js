const mongoose = require('mongoose');

const users = mongoose.model('Usuario', {
    nome: String,
    senha: String,
    username: String,
    ativo: Boolean,
    admin: Boolean
})

module.exports = users;