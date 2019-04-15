const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let studentSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email:{
        type: String,
        required:[true,'El email es necesario']
    },
    cedula:{
        type: Number,
        unique: true,
        required: [true, 'La cedula es necesaria']
    },
    telefono:{
        type: Number,
        required: [true, 'El telefono es necesario']
    }
})

module.exports = mongoose.model('Student', studentSchema);