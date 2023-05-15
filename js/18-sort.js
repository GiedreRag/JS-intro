console.clear();

const abc = ['z', 'haha', 'ha', 'j', 'b', 'a'];
abc.sort();

console.log(abc);

const marks = [10, 0, 3, 1, 21, 2, 25, 13, 8, 4, 6];
console.log(marks);

marks.sort((a, b) => a - b);    // a, b => -N | 0 | +N
console.log(marks);

console.log('---------------');

const students = [
    { name: 'Petras', age: 99 },
    { name: 'Maryte', age: 20 },
    { name: 'Jonas', age: 40 },
    { name: 'Ona', age: 77 },
];
console.log(students);

students.sort((a, b) => a.age - b.age);
console.log(students);

students.sort((a, b) => b.age - a.age);
console.log(students);

students.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
console.log(students);