const express = require('express');
const _ = require('underscore');
const Libro = require('../models/libro');

const app = express();

app.get('/libro', function(req, res) {

    





    Libro.find({})
        .exec((err, libros) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                libros
            });

        });
       
});

app.post('/libro', function(req, res) {
    let body = req.body;

    let libro = new Libro({
        numeroadquisicion: body.numeroadquisicion,
        titulo: body.titulo,
        autor: body.autor,
        clasificacion: body.clasificacion,
        editorial: body.editorial,
        ejemplar: body.ejemplar,
        volumen: body.volumen,
        tomo: body.tomo,
        biblioteca: body.biblioteca,
        material: body.material,
        coleccion: body.coleccion,
        numficha: body.numficha,
        img: body.img,
        descripcion: body.descripcion,
        area: body.area
    });

    libro.save((err, libroDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            libro: libroDB
        });
    });
});

app.put('/libro/:numeroadquisicion', function(req, res) {
    let numeroadquisicion = req.params.numeroadquisicion;
    let body = _.pick(req.body, ['img', 'estado']);

    Usuario.findByNumeroadquisicionAndUpdate(numeroadquisicion, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            libro: usuarioDBlibroDB
        });
    });


});


app.delete('/libro', function(req, res) {
    res.json('delete libro')
});

module.exports = app;