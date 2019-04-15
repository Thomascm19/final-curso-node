const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario']
    },
    cedula: {
        type: Number,
        unique: true,
        required: [true, 'La cedula es necesaria']
    },
    password: {
        type: String,
        unique: true,
        required: [true, 'La cedula es necesaria']
    },
    telefono: {
        type: Number,
        require: [true, 'El telefono es necesario']
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    }
})



userSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' })


module.exports = mongoose.model('User', userSchema);