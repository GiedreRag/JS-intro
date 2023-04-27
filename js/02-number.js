console.clear();
/*
NUMBERS

normalus
- sveikieji
- desimtainiai

mistiniai
- Infinity/ -Infinity
- Nan (not-a-number)

MATEMATINIAI VEIKSMAI
aritmetiniai operatoriai:
    +, -, /, *, ** (laipsnis), % (liekana)

priskirimo operatoriai:
=, +=, -=, /=, *=, **=, %=

KINTAMUJU INICIAVIMO BUDAI:
- const (default)
- let (jei kinta reiksme)
- var (nenaudoti, nebent zinai ka darai)
*/

// sveikasis
console.log(12551);
console.log(-12551);
console.log(0);
console.log(-0);

// desimtasis
console.log(3.1415);
console.log(-3.1415);
console.log(3 / 4);
console.log(1 / 3);
console.log(0.1 + 0.2);

// begalybes
console.log(Infinity);
console.log(-Infinity);

// Nan
console.log(NaN);

// VEIKSMAI
console.log(7 + 5);
console.log(7 - 5);
console.log(7 / 5);
console.log(7 * 5);

console.log(2 ** 2, '=', 2 * 2);
console.log(2 ** 3, '=', 2 * 2 * 2);
console.log(2 ** 4, '=', 2 * 2 * 2 * 2);

const a = 7;
console.log(a);

const PI = 3.14;
console.log(PI);


//pazymiai: 10, 2, 8, 4, 6.

let suma = 0;
console.log(suma);

suma = suma + 10;
console.log(suma);

suma = suma + 2;
console.log(suma);

suma = suma + 4;
console.log(suma);

let suma2 = 0;
console.log(suma2);

/*sutrumpinant pirmo pavyzdzio skaiciavima, vietoj to, kad rasyt suma2 = suma2 + 10, rasom: suma2 += 10;*/
suma2 += 10;
console.log(suma2);

suma2 += 2;
console.log(suma2);

let suma3 = 0;
console.log(suma3);

suma3 += 10;
console.log(suma3);

suma3 /=2;
console.log(suma3);

const skaicius = 81;
const daliklis = 10;
const dalmuo = skaicius / daliklis;
console.log(skaicius, '/', daliklis, '=', dalmuo);

const liekana = skaicius % daliklis;
console.log(liekana);

console.log(17 / 3);
console.log(17 % 3);

console.log(0 % 3);
console.log(1 % 3);
console.log(2 % 3);

let liek = 144;

liek = liek % 12; /*trumpiau parasyt: liek %= 12;*/
console.log(liek);

liek = liek % 15; /*trumpiau parasyt: liek ˚%=15;*/
console.log(liek);