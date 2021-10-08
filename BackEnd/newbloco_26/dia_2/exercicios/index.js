require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js');

app.use(express.json());

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));

app.get('/cep/:cep', Cep.findAddressByCep);
app.post('/cep', Cep.create);

app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
