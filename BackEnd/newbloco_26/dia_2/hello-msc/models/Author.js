// hello-msc/models/Author.js

const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Cria uma string com o nome completo do autor

// Busca todos os autores do banco.

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => authors);
};

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection().then((db) =>
    db.collection('authors').findOne(new ObjectId(id))
  );

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return { id, firstName, middleName, lastName };
};

const create = async (firstName, middleName, lastName) =>
  connection().then((db) =>
    db.collection('authors').insertOne({ firstName, middleName, lastName })
  );

module.exports = {
  getAll,
  findById,
  create,
};
