// apiScript.js
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array = [];
    for(let i = 0; i < 10; i += 1) {
      array.push(Math.floor(Math.random() * 51));
    };
    const sum = array.map(n => n ** 2).reduce((acc, curr) => acc+curr);
    
    sum < 8000 ? resolve() : reject();
  })
  
  promise
    .then(() => console.log('Promise resolved'))
    .catch(() => console.log('Promise rejected'))
};

fetchPromise()
