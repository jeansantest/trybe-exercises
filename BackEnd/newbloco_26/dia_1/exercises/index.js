const express = require('express');
const app = express();
const port = 4000;
const User = require('./model/User');
const { isValidPassword, isValidAll } = require('./middleware/validations');

app.use(express.json());

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user)
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  res.status(200).json(user);
});

app.post('/user', isValidPassword, isValidAll, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const id = await User.create(firstName, lastName, email, password);
  res.status(201).json({ id, firstName, lastName, email });
});

app.put('/user/:id', isValidPassword, isValidAll, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const user = await User.findById(id);
  if (!user)
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  await User.updateUser(id, firstName, lastName, email, password);
  res.status(200).json({ id, firstName, lastName, email });
});

app.listen(port, () => console.log(`Example app listening on port port!`));
