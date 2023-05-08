console.clear();
/*
FOR - loop/ciklas
kartojame operacijas tol kol reikia, arba numatyta kieki kartu
*/

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let sum = 0;
let i = -1;

// sum += marks[i];
// + aritmetinis paskirymas
/*

sum += marks[i];
i += 1;

sum += marks[i];
i += 1;

sum += marks[i];
i += 1;

sum += marks[i];
i += 1;

sum += marks[i];
i += 1;

// arba taip surasyt:
sum += marks[i = i + 1];
sum += marks[i = i + 1];
sum += marks[i = i + 1];
sum += marks[i = i + 1];
sum += marks[i = i + 1];

console.log(sum);
*/

sum += marks[++i];
sum += marks[++i];
sum += marks[++i];
sum += marks[++i];
sum += marks[++i];

console.log('>>>' , sum);

console.log('-----------------');

console.clear();

const pazymiai = [10, 2, 8, 4, 6, 1, 3, 5, 7, 9]; // cia yra masyvas
const kasKelintas = 3;

for (let i = kasKelintas - 1; i < pazymiai.length; /* kad paimtu, kas trecia pazymi: */ i += kasKelintas /* cia jei, visus surasyt: i++ arba i += 1 */) {
    console.log(i, '-', pazymiai[i]);
}

console.log('------------------');
for (let i = 0; i < pazymiai.length; i++) {
    if (i % kasKelintas === kasKelintas - 1) {
        console.log(i, '-', pazymiai[i]);
    }
}

console.clear();


console.log('------------------');

// String pavers i number: 
console.log('5', parseInt('5'));
console.log(typeof '5', typeof parseInt('5'));

console.log('3.14', parseInt('3.14'));
console.log('3.14', parseFloat('3.14'));
console.log('777', parseFloat('777'));

/* ant cia neveiks: 
console.log('labas', parseInt('labas'));
console.log('labas', parseFloat('labas')); */

console.log('Nan', parseFloat('Nan'));
console.log('Infinity', parseFloat('Infinity'));

console.log('5', +'5');

// irodymas visi 3 variantai veikia: 
console.log('5', parseInt('5'), parseFloat('5'), +'5');

console.log('-------------------');

// nuo -5 iki 6:
for (let i = -5; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 2; i += 0.1) {
    // let suapvalintas = +i.toFixed(3);
    let suapvalintas = parseFloat(i.toFixed(3));
    suapvalintas += 1;
    console.log(suapvalintas, '-', i);
}

console.log('2eur', parseFloat('2eur'), +'2eur');
// nesuveiks: 
console.log('$5', parseFloat('$5'), +'$5');

console.log('--------------------');
console.clear();

const text = 'Labas!';

for (let i = 0; i < text.length; i++) {
    console.log(i, '-', text[i]);
}

console.log('---------------');

for (let i=text.length - 1; i >= 0; i--) {
    console.log(i, '-', text[i]);
}

// kitas variantas uzrasyt: 

for (let i = 0; i < text.length; i++) {
    console.log(i, '-', text[text.length - i - 1]);
}


/* Galima taip susirasyt, kad lengviau skaityt:

for (let i = 0; i < text.length; i++) {
    const index = text.length - i - 1;
    console.log(i, '-', text[text.length - i - 1]);
} */ 

let atbulas = '';

for (let i = 0; i < text.length; i++) {
    const index = text.length - i - 1;
    const symbol = text[index];
    atbulas += symbol;
    console.log(i, '-', symbol);
}

console.log('>>>', atbulas);