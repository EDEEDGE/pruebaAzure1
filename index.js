require('dotenv').config();
const express = require('express');
const app = express();


//configuracion del puerto 
const port = process.env.PORT || 3006;

//primera ruta 
app.get('/prueba1', (req, res) => {
    res.send('Esta es una prueba para subir a azure...');
});

//segunda ruta
app.get('/info', (req, res) => {
    res.send('Esto es para mas informacion...');
});

//tercera ruta
app.get('/status', (req, res) => {
    res.json({ status: 'El servidor esta funcionando correctamente...' });
});


//inicio del servidro
app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
})
