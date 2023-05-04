console.clear();

function sum(a, b) {
    console.log('>>>', a, b)
    return a + b;
}

const s1 = sum (2, 2);
console.log(s1);

const s2 = sum (7, 5);
console.log(s2);

const s3 = sum (-16, -15);
console.log(s3);

const s4 = sum (3.14, 2.72);
console.log(s4);

function hi(name) {
    console.log(name);
    return `Hi, my name is ${name}!`;
}

// Hi, my name is Petras!
// Hi, my name is Maryte!

console.log(hi('Petras'));
console.log(hi('Martye'));

// Sveiki, as Petras ir man 16 metu.
// Sveiki, as Maryte ir man 160 metu.

function prisistatymas(name, age) {
    return `Sveiki, as ${name} ir man ${age} metu.`
}

console.log(prisistatymas('Petras', 16));
console.log(prisistatymas('Maryte', 160));