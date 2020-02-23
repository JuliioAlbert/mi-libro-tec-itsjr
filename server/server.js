require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', function(req, res) {
    res.send('Hello ')
});

app.get('/libro', function(req, res) {
    res.json('get libro')
});

app.post('/libro', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            msj: 'El nombre es necesario'
        });
    } else {
        res.json({
            body
        });
    }
});

app.put('/libro/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    });
});
app.delete('/libro', function(req, res) {
    res.json('delete libro')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
});