const express = require('express');

const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.send("<h1>Hola Mundo</h1>");
})

app.get('/amigos', (req, res) => {
    res.send(amigos);
})

/* app.get('/index', (_req,res) => {
    let htmlInfo = path.resolve(__dirname,'./vistas/index.html');
    res.sendFile(htmlInfo);
}) */
app.listen(3001, () => console.log("Servidor escuchandooooo en puerto 3001"));