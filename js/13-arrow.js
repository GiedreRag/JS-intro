console.clear();

const x = 7;
const y = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${x} + ${y} = ${sum(x, y)}`);

// anonimous function
const diff = function (a, b) {
    return a - b;
}
console.log(`${x} - ${y} = ${diff(x, y)}`);

// anrrow function, naudojam =>
const multi = (a, b) => {
    return a * b;
}
console.log(`${x} * ${y} = ${multi(x, y)}`);

// anonimous function; dalinam
// jeigu yra tik 1 procedura
// tai galima nerasyti {return}, kad maziau rasyt
const div = (a, b) => a / b;
console.log(`${x} / ${y} = ${div(x, y)}`);

// anonimous function; keliam kvadratu
// jeigu yra tik 1 parametras
// tai galima nerasyt ()
const sqr = a => a * a;
console.log(`${x}^2 = ${sqr(x)}`);

console.log('------------------');

const firstLetter = str => str [0]; // bet gali irasyt s vietoj str
console.log('Labas', '->', firstLetter('Labas'));

// function isOld(age) {
//    if (age >= 18) {
//        return 'old';
//    }
//    return 'young';
// }

// trumpinam taip:

const isOld = age => age >= 18 ? 'old' : 'young';

console.log(50, '->', isOld(50));
console.log(5, '->', isOld(5));

console.log('-------------------');

// function doIneedUmbrella(temp) {
//    if (temp) {
//        return false;
//    }
//    return true;
//}


// const doIneedUmbrella = temp => temp > 0 ? false : true;
// const doIneedUmbrella = temp => temp <= 0;
const doIneedUmbrella = temp => !(temp > 0);

console.log(18, doIneedUmbrella(18));
console.log(-18, doIneedUmbrella(-18));

console.log('----------------');

function shouldIpush(list, number) {
    if (number  % 2  === 0) {
        list.push(number);
    }

    return list;
}

console.log([], 4, '->', shouldIpush([], 4));
console.log([4], 3, '->', shouldIpush([4], 3));
console.log([10, 20], 14, '->', shouldIpush([10, 20], 14));

console.clear();

console.log('-------------------');

/*function calc(n1, operation, n2) {

    if (operation === '+') {
        return n1 + n2;
    }

    if (operation === '-') {
        return n1 - n2;
    }  

    if (operation === '*') {
        return n1 * n2;
    } 

    if (operation === '/') {
        return n1 / n2;
    } 

    if (operation === '**') {
        return n1 ** n2;
    } 
}*/

// Trumpesnis variantas (objektas):

function calc(n1, operation, n2) {
    const funcs = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '**': (a, b) => a ** b,
    }

    return funcs[operation](n1, n2);
}

console.log(`7 + 5 = ${calc(7, '+', 5)}`);
console.log(`7 - 5 = ${calc(7, '-', 5)}`);
console.log(`7 * 5 = ${calc(7, '*', 5)}`);
console.log(`7 / 5 = ${calc(7, '/', 5)}`);
console.log(`7 ** 5 = ${calc(7, '**', 5)}`);

console.log('--------------------');

// grazina pirma raide
// grazina paskutine raide
// grazina vidurine raide
// grazina teksto ilgi

// aboutStr('labas', 'first')
// aboutStr('labas', 'last')
// aboutStr('labas', 'mid')
// aboutStr('labas, 'size')
// aboutStr('labas, 'lowercase')
// aboutStr('labas, 'uppercase')

console.clear();

function raides(tekstas, kintamieji) {
    const funkcijos = {
        'first': tekstas => tekstas.at(0),
        'last': tekstas => tekstas.at(-1),
        'mid': tekstas => tekstas[Math.round(tekstas.length/2)-1],
        'size': tekstas => tekstas.length,
        'lowercase': tekstas => tekstas.toLowerCase(),
        'uppercase': tekstas => tekstas.toUpperCase(),
        'uppercaseCount': tekstas => tekstas.uppercaseCount,
        'lowercaseCount': tekstas => tekstas.lowercaseCount,
    }
    return funkcijos[kintamieji](tekstas);
}


console.log(raides('labas', 'first'));
console.log(raides('labas', 'last'));
console.log(raides('labas', 'mid'));
console.log(raides('labas', 'size'));
console.log(raides('labas', 'lowercase'));
console.log(raides('labas', 'uppercase'));
console.log(raides('labas', 'lowercaseCount'));
rconsole.logr(raides('labas', 'uppercaseCount'));
