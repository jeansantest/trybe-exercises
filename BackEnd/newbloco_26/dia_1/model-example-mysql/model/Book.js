// const connection = require('./connection');

// const serialize = (bookData) => ({
//   id: bookData.id,
//   title: bookData.title,
//   authorId: bookData.author_id,
// });

// const getAll = async () => {
//   const [books] = await connection.execute(
//     'SELECT id, title, author_id FROM books'
//   );

//   return books.map(serialize);
// };

// const getByAuthorId = async (id) => {
//   const [books] = await connection.execute(
//     'SELECT * FROM books WHERE author_id = ?',
//     [id]
//   );

//   if (books.length === 0) return null;

//   return books.map(serialize);
// };

// const isValid = (title, authorId) => {
//   if (!title || title.length < 3 || typeof title !== 'string') return false;
//   if (!authorId) return false;
//   return true;
// };

// const create = async (title, authorId) =>
//   connection.execute(
//     'INSERT INTO model_example.books (title, authorId) VALUES (?, ?)',
//     [title, authorId]
//   );

// module.exports = { getAll, getByAuthorId, isValid, create };
