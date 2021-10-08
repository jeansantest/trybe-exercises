const connection = require('./connection');
const { ObjectId } = require('mongodb');

const findById = async (id) => {
  const userData = await connection()
    .then((db) => db.collection('user').findOne(ObjectId(id)))
    .catch(() => null);

  if (!userData) return null;

  const { firstName, lastName, email } = userData;

  return { id, firstName, lastName, email };
};

const updateUser = async (id, firstName, lastName, email, password) => {
  const userData = await connection()
    .then((db) =>
      db
        .collection('user')
        .updateOne(
          { _id: ObjectId(id) },
          { $set: { firstName, lastName, email, password } }
        )
    )
    .catch(() => null);

  return userData;
};

const isValid = (firstName, lastName, email, password) => {
  if (!firstName) return 'firstName';
  if (!lastName) return 'lastName';
  if (!email) return 'email';
  if (!password) return 'password';
  if (typeof password !== 'string') return 'passwords';
  if (password.length < 6) return 'password6';
  return false;
};

const create = async (firstName, lastName, email, password) => {
  const id = ObjectId();
  await connection().then((db) =>
    db
      .collection('user')
      .insertOne({ _id: id, firstName, lastName, email, password })
  );
  return id;
};

module.exports = { create, isValid, findById, updateUser };
