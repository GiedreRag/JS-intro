console.clear();

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const marksCopy = marks.map(m => m);
console.log(marksCopy);

marks[0] = 100;
console.log(marks);
console.log(marksCopy);

const marksCopySpread = [...marks];
console.log(marksCopySpread);

marks[0] = 1000;
console.log(marks);
console.log(marksCopy);
console.log(marksCopySpread);

const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
};

const userCopy = user;

console.log(user);
console.log(userCopy);

user.name = 'Maryte';

console.log(user);
console.log(userCopy);

const user2 = {};

for (const key in user) {
    user2[key] = user[key];
}
console.log('----------');
console.log(user);
console.log(userCopy);
console.log(user2);
console.log('----------');

user.name = 'Petras';
console.log(user);
console.log(userCopy);
console.log(user2);
console.log('----------');

const user3 = { ...user };

console.log(user);
console.log(user3);
console.log('----------');

user.name = 'Maryte';
console.log(user);
console.log(user3);

const arr = [];
const arrCopy = [...arr];

const obj = {};
const objCopy = { ...obj };

let a = 5;
let b = a;

console.log('>>>', a, b);

a = 777;
console.log('>>>', a, b);

console.clear();

const words = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau', 'siandien'];

const first = words[0];
const second = words[1];
const third = words[2];
const rest = [words[3], words[4], words[5],];

console.log(first, second, third);
console.log(rest);

const [pirmas, antras, trecias, ...like] = words;

console.log('----------------');
console.log(pirmas, antras, trecias);
console.log(like);

console.log('----------------');

const numbers = [10, 20, 30, 40];
// const n1 = numbers[0];
// const n2 = numbers[1];
// const n3 = numbers[2];
// const n4 = numbers[3];

const [n1, n2, n3, n4, n5, ...likeN] = numbers;

console.log(n1, n2, n3, n4, n5);
console.log(likeN);

console.clear();

const car = {
    model: 'Audine',
    color: 'red',
    price: 100,
    driver: 'Chuck',
    coPilot: 'gezas',
};

// const model = car.model;
// const color = car.color;
// const price = car.price;

const { model, color, price, ...dovana } = car;

console.log(model, color, price);
console.log(dovana);

console.clear();

const student1 = {
    name: 'Petras',
    marks: [10, 2, 8],
    isMarried: true,
    phone: 248565148,
    parents: {
        mother: {
            name: 'Ona',
        },
        father: {
            name: 'Jonas',
        },
    },
};

const student2 = { ...student1 };

// console.log(student1);
// console.log(student2);

// student1.name = 'Maryte';
// student1.marks.push(4);

// console.log(student1);
// console.log(student2);

// const student3 = { ...student1, color: '#f90' };
// console.log(student1);
// console.log(student3);

// const student4 = { ...student1, name: 'Maryte' };
// console.log(student1);
// console.log(student4);

const student5 = {
    ...student1,
    marks: [...student1.marks],
    parents: {
        ...student1.parents,
        father: { ...student1.parents.father },
        mother: { ...student1.parents.mother },
    },
};

student1.parents.father.name = 'Jonukas';
student1.marks.push(4);

console.log(student1);
console.log(student5);

console.clear();
// json

const student6 = JSON.parse(JSON.stringify(student1));

student1.marks.push(6);
student1.parents.father.name = 'Jonas';

console.log(student1);
console.log(student6);

console.clear();

function deepCopy(data) {
    return JSON.parse(JSON.stringify(data));
}

const student7 = deepCopy(student1);

student1.marks.push(7);
student1.parents.mother.name = 'Onute';

console.log(student1);
console.log(student7);