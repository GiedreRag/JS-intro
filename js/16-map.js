console.clear();

const marks = [10, 2, 8, 4, 6];
let doubleMarks = [];

// for (let i = 0; i < marks.length; i++) {
//     doubleMarks[i * 2] = marks[i] * 2;
// }

for (const mark of marks) {
    doubleMarks.push(mark * 2);
}

console.log(doubleMarks);
console.log(doubleMarks.length);

const tripleMarks = marks.map(m => m * 3);
console.log(tripleMarks);

const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(names);

const nameAbbrs = names.map(n => n[0]);
console.log(nameAbbrs);

const abbrs = [];

for (const name of names) {
    abbrs.push(name[0]);
}
console.log(abbrs);

// console.clear();

// const numbers = [10, 20, 30, 40];
// const numbersCopy = numbers;

// console.log('1)', numbers);
// console.log('2)', numbersCopy);
// console.log('---------');

// numbers[0] = 1000;
// console.log('1)', numbers);
// console.log('2)', numbersCopy);
// console.log('---------');

// numbersCopy[1] = 2000;
// console.log('1)', numbers);
// console.log('2)', numbersCopy);
// console.log('---------');

// let a = 5;
// let b = a;

// console.log(a, b);

// a = 777;
// console.log(a, b);

// b = 888;
// console.log(a, b);

console.log('-----------');

const words = ['aaa', 'bbb', 'ccc'];
const letters = [];

for (const word of words) {
    letters.push(word);
}

console.log(words);
console.log(letters);

words[0] = 'AAA';

console.log(words);
console.log(letters);