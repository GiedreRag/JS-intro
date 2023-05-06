console.clear();

console.log('PUSH------------------');

const marks = [];
console.log(marks);

marks.push(10);
marks.push(2);
marks.push(8);
console.log(marks);

console.log('UNSHIFT------------------');

marks.unshift(9);
marks.unshift(8);
marks.unshift(7);
console.log(marks);

console.log('SHIFT------------------');

marks.shift();
console.log(marks);

console.log('POP------------------');

marks.pop();
console.log(marks);

console.log('AT------------------');

console.log(marks[3]);
// same as using at:
console.log(marks.at(3));

marks.push(5);

// naudojant at, jei nori gaut paskutini skaiciu, kai nezinai, kiek is viso skaiciu yra:
const paskutinePozicija = marks.length - 1;
console.log(marks);
console.log(marks[paskutinePozicija]);
//arba
console.log(marks.at(paskutinePozicija));
//arba, gaunas trumpiausias rasymas su at:
console.log(marks.at(-1));

console.log('INCLUDES------------------');

//naudojant includes (pasakys ar true ar false):
console.log(marks);
console.log(marks.includes(1));
console.log(marks.includes(2));
console.log(4, marks.includes(4)); //darasiau priekyje skaiciu 4, kad atsakymas atrodytu aiskiau apie ka.
console.log(marks.includes('labas'));

const masyvasObjektu = [
    { a: 'a' },
    { b: 'b' },
    { c: 'c' },
];

console.log(masyvasObjektu.includes({ b: 'b' }));

console.log('INDEXOF------------------');
// parodys pozicija:

console.log(marks);
console.log(marks.indexOf(8));
console.log(marks.indexOf(2));

console.log('JOIN------------------');
// sujungia, kaip vientisa teksto gabala, kaip string.

const visiPazymiai = marks.join();
console.log(visiPazymiai);
console.log(typeof visiPazymiai);

// gali kazka idet, kad tarp ju irasytu:

const visiPazymiai2 = marks.join('');
console.log(visiPazymiai2);

const visiPazymiai3 = marks.join(' -==- ');
console.log(visiPazymiai3);

console.log('REVERSE------------------');
// apversti eiliskuma, bet jau su visam. Noring grazint, reik vel daryt reverse.

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skaiciai);

console.log(skaiciai.reverse());
// arba gali rasyt: skaiciai.reverse();
console.log(skaiciai);

console.log('SLICE------------------');
// iskirps kazkokia specifine nurodyta dali.

console.log(skaiciai);
console.log(skaiciai.slice(0));
console.log(skaiciai.slice(1));
console.log(skaiciai.slice(-3)); //paims 3 paskutinius skaicius ir nuo ju iki galo

console.log(skaiciai.slice(2, 5)); //paims nuo to iki nurodyto.
console.log(skaiciai.slice(2, -3));
console.log(skaiciai.slice(-3, -3));

console.log('SPLICE------------------');
// iterpt.

console.log(skaiciai);
console.log(skaiciai.splice(2, 0, 'X'));
// 2 - kuri pozicija, 0 - kad nieko neistrint, 'X' - ka irasyti.
console.log(skaiciai); // nes nerodo, ka padare, tai taip patikrinam.

console.log(skaiciai.splice(3, 1));
// 3 - kuri pozicija, 1 - kiek istrint. Siuo atveju istrina 8.
console.log(skaiciai);

console.log(skaiciai.splice(-2, 2));
// kad istrint du paskutinius skaicius.
console.log(skaiciai);

console.log(skaiciai.splice(0, 1, 100));
// kad vietoj 10 irasyt 100. 0 - kurioj pozicijoj yra skaicius, kuri norime keisti, 1 - kiek skaiciu keiciam/trynam, 100 - i ka keiciam.
console.log(skaiciai);

skaiciai[0] = 10;
// kad pirma skaiciu grazint/pakeist i 10.
console.log(skaiciai);

