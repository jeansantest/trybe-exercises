// apiScript.js
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array = [];
    for(let i = 0; i < 10; i += 1) {
      array.push(Math.floor(Math.random() * 51));
    };
    const sum = array.map(n => n ** 2).reduce((acc, curr) => acc+curr);
    
    sum < 8000 ? resolve(sum) : reject();
  })
  
  promise
    .then((sum) => [2,3,5,10].map(n => sum / n))
    .then((arr) => console.log(arr.reduce((acc,curr) => acc + curr,0)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
};

fetchPromise()
