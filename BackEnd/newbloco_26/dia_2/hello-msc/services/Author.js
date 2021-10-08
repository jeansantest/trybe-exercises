const Author = require('../models/Author');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const isNonEmptyString = (value) => {
  if (!value) return false;

  return typeof value === 'string';
};

const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;

  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors
    .map(({ _id, firstName, middleName, lastName }) => ({
      id: _id,
      firstName,
      middleName,
      lastName,
    }))
    .map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  return getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);

  if (!authorValid) return false;

  const { insertedId } = await Author.create(firstName, middleName, lastName);

  return getNewAuthor({ id: insertedId, firstName, middleName, lastName });
};

module.exports = {
  getAll,
  findById,
  create,
};
