console.clear();

const n = 5;
const nJSON = JSON.stringify(n);

console.log(n);
console.log(nJSON);

const s = 'labas';
const sJSON = JSON.stringify(s);

console.log(s);
console.log(sJSON);

const b = true;
const bJSON = JSON.stringify(b);

console.log(b);
console.log(bJSON);

const arrNumber = [1, 2, 3];
const arrNumberJSON = JSON.stringify(arrNumber);

console.log(arrNumber);
console.log(arrNumberJSON);

const arrString = ['labas', 'rytas', 'Lietuva'];
const arrStringJSON = JSON.stringify(arrString);

console.log(arrString);
console.log(arrStringJSON);

const obj = {
    name: 'Petras',
    age: 99,
    isMarried: true,
};
const objJSON = JSON.stringify(obj);

console.log(obj);
console.log(objJSON);

console.log('--------------');

console.log(nJSON);
console.log(sJSON);
console.log(bJSON);
console.log(arrNumberJSON);
console.log(arrStringJSON);
console.log(objJSON);

const nReceived = JSON.parse(nJSON);
console.log(nReceived, typeof nReceived);

const arrNumberReceived = JSON.parse(arrNumberJSON);
console.log(arrNumberReceived, typeof arrNumberReceived);
console.log(arrNumberReceived[0]);
console.log(arrNumberReceived[1]);
console.log(arrNumberReceived[2]);

const objReceived = JSON.parse(objJSON);
console.log(typeof objJSON, objJSON);
console.log(typeof objReceived, objReceived);
console.log(objReceived.name);
console.log(objReceived.age);
console.log(objReceived.isMarried);