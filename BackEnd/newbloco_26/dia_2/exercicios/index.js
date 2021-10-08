require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));

app.get('/cep/:cep', (req, res) => {
  const { cep } = req.params;
  if (!/\d{5}-?\d{3}/.test(cep))
    return res
      .status(400)
      .json({ error: { code: 'invalidData', message: 'CEP inválido' } });

  res.status(200).json({ message: 'minha pika no teu rabo' });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
