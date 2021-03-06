//declarar uso de express para api y nedb para base de datos
const express = require('express');
const Datastore = require('nedb');

//creacion de api con express
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'))
//limite tamaño de json
app.use(express.json({ limit: '1mb' }))

//creacion de base de datos
const database = new Datastore('database.db');
database.loadDatabase();

//GET request para API
app.get('/api', (request, response) => {
    database.find({}, (err, data) =>{
        if (err){
            response.end();
            return;
        }
        response.json(data);
    });
});

//POST request para API
app.post('/api', (request, response) => {
    const data = request.body;
    //insertar data en base de datos
    database.insert(data);
    response.json(data);
});

