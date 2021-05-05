const nameEmail = (name) => ({
  nomeCompleto: name, 
  email: `${name.split(' ').join('_').toLowerCase()}@trybe.com`,
})

const newEmployees = () => {
  const employees = {
    id1: (name) => nameEmail(name),
    id2: (name) => nameEmail(name),
    id3: (name) => nameEmail(name),
  }
  return employees;
};
let employees = newEmployees();
console.log(employees.id1('Pedro Guerra'));
console.log(employees.id2('Luiza Drumond'));
console.log(employees.id3('Carla Paiva'));

