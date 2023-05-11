console.clear();

function multiply(a, b) {
const errors = [];

// Geresnis variantas sis:

if (typeof a !== 'number') {
    return 'ERROR: pirmas parametras ne skaicius';
}

if ( a === Infinity || a === -Infinity) {
    return 'ERROR: pirmas parametras negali buti Infinity';
}

// Kitas variantas:
// if (Math.abs(a) === Infinity) {

// arba, sis apima Infinity ir Nana:
// if (!isFinite(a)) {    (dadedam sauktuka, nes reik kad rastu not Finite)
// (ERROR...turi buti realus skaicius)

if ('' + a === 'NaN') {
    return 'ERROR: pirmas parametras negali buti NaN';
}

// Kitas variantas:
// if (isNaN(a)) {

if (typeof b !== 'number') {
    return 'ERROR: antras parametras ne skaicius';
}

if ( b === Infinity || b === -Infinity) {
    return 'ERROR: antras parametras negali buti Infinity';
}

// if (Math.abs(b) === Infinity) {

if ('' + b === 'NaN') {
    return 'ERROR: antras parametras negali buti NaN';
}

const result = a * b;

return result;
}

// Galima ir sitaip, bet pirmas geriau:

/*    if (typeof a !== 'number') {
        errors.push('ERROR: pirmas parametras ne skaicius');
    }

    if (typeof b !== 'number') {
        errors.push('ERROR: antras parametras ne skaicius');
    }

    if (errors.length > 0) {
        return errors;
    }

    const result = a * b;

    return result;
} */

// Tipai:

console.log(multiply('labas', 5));
console.log(multiply(5, 'labas'));
console.log(multiply('labas', 'rytas'));

// Ne skaiciai:

console.log(multiply(Infinity, 5));
console.log(multiply(5, Infinity));
console.log(multiply(Infinity, Infinity));

console.log(multiply(-Infinity, 5));
console.log(multiply(5, -Infinity));
console.log(multiply(-Infinity, -Infinity));

console.log(multiply(NaN, 5));
console.log(multiply(5, NaN));
console.log(multiply(NaN, NaN));

// Ok:

console.log(multiply(7, 5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, -5));