const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['Estudent', 'Admin'],
    message: '{VALUE} no es un rol valido'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nip: {
        type: String,
        required: [true, 'El nip es necesario'],
    },
    nocontrol: {
        unique: true,
        type: Number,
        required: [true, 'El no Control es obligatorio']
    },
    img: {
        type: String,
        required: false
    },
    rol: {
        type: String,
        default: 'Estudent',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.nip;

    return userObject;
}
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema);