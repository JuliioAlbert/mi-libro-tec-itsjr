const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Conten-Type': 'application/json' });
        let salida = {
            nombre: 'Julio',
            edad: 20,
            programando: 'En NodeJS',
            url: req.url
        };
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);
console.log('En el puerto 8080');