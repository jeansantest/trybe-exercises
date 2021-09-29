const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  age > 17
    ? res.status(200).json({ message: `Hello, ${name}` })
    : res.status(404).json({ message: 'Unauthorized' });
});

app.listen(3002, () => console.log('Aplicação na porta 3002'));
