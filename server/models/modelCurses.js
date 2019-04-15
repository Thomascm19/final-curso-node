const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cursesSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es necesario']
    },
    id:{
        type: Number,
        required:[true,'El id es requerido']
    },
    desc:{
        type: String,
        unique: true,
        required: [true, 'La descripcion es necesaria junto con el valor']
    }
})

module.exports = mongoose.model('Curses', cursesSchema);