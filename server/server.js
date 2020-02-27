require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'))
app.use(require('./routes/libro'))
app.get('/', function(req, res) {
    res.json('Hola Mundo')
});

mongoose.connect(process.env.URLDB, {
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
}, (err, resp) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});




app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
});