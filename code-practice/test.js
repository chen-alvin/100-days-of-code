const collection = [
  {first:'romeo', last:'montague'},
  {first:'mercutio', last:null},
  {first:'tybalt', last:'capulet'}
]

const source = {last:'capulet'};

console.log(collection[0]);

console.log(collection[2]);

const value = Object.keys(source)[0];

console.log(source);
console.log(Object.keys(source));
console.log(Object.keys(source)[0]);

console.log(collection[2].value);

console.log(collection.filter(element => element.hasOwnProperty(Object.keys(source)[0])));