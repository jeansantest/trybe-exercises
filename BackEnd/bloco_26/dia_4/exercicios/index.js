const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./authMiddleware');
const crypto = require('crypto');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());
// app.use(authMiddleware);
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

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

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', (req, res) => {
  fs.readFile('simpsons.json', 'utf8')
    .then((response) => res.status(200).json(JSON.parse(response)))
    .catch((err) => res.status(500).json(err));
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile('simpsons.json', 'utf8')
    .then((response) => {
      const simpsonsById = JSON.parse(response).find(
        (simpson) => Number(id) === Number(simpson.id)
      );

      if (!simpsonsById) {
        return res.status(404).json({ message: '404 - Not Found' });
      }
      res.status(200).json(simpsonsById);
    })
    .catch((err) => res.status(404).json(err));
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await fs
    .readFile('simpsons.json', 'utf8')
    .then((response) => JSON.parse(response))
    .catch((err) => res.status(500).json(err));
  if (simpsons.map((s) => s.id).includes(id)) {
    return res.status(404).json({ message: 'id already exists' });
  }

  simpsons.push({ id, name });
  await fs
    .writeFile('simpsons.json', JSON.stringify(simpsons))
    .then(() => console.log('Escrito com sucesso'))
    .catch((err) => console.log(err.message));

  res.status(204).end();
});

app.put('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const simpsons = await fs
    .readFile('simpsons.json', 'utf8')
    .then((response) => JSON.parse(response))
    .catch((err) => res.status(500).json(err));
  const simpsonsIndex = simpsons.findIndex((s) => s.id === id);

  if (simpsonsIndex === -1) {
    return res.status(404).json({ message: 'Simpsons not found!' });
  }

  simpsons[simpsonsIndex] = { name, id };
  await fs
    .writeFile('simpsons.json', JSON.stringify(simpsons))
    .then(() => console.log('Escrito com sucesso'))
    .catch((err) => console.log(err.message));

  res.status(204).end();
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
});

app.all('*', (req, res) =>
  res.json({ message: `Não encontrado caminho ${req.path}` })
);

app.listen(3002, () => console.log('Aplicação na porta 3002'));
