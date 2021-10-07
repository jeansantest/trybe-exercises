const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const Author = require('./model/Author');
// const Book = require('./model/Book');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findById(id);
  if (!authors) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Author.isValid(firstName, middleName, lastName))
    return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(firstName, middleName, lastName);

  res.status(201).json({ message: 'Autor criado com sucesso' });
});

// app.get('/books', async (_req, res) => {
//   const books = await Book.getAll();

//   res.status(200).json(books);
// });

// app.get('/books/:id', async (req, res) => {
//   const { id } = req.params;
//   const books = await Book.getByAuthorId(id);
//   if (!books) return res.status(404).json({ message: 'Not found' });

//   res.status(200).json(books);
// });

// app.post('/books', async (req, res) => {
//   const { title, authorId } = req.body;

//   if (!Book.isValid(title, authorId))
//     return res.status(400).json({ message: 'Dados inválidos' });

//   await Book.create(title, authorId);

//   res.status(201).json({ message: 'Livro criado com sucesso' });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
