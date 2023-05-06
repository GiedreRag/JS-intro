console.clear();
/*
IF - palyginimas

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, ===, 
naudotini: >, <, >=, <=, ==, ===, 
nenaudotoni: ==,

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/

if (4 > 2) {
    console.log('taip');
}

if (7 < 1) {
    console.log('7 < 1');
} else {
    console.log('7 ne < 1');
}

console.log('-------------------');

const userAge = 10;
const ageLimit = 18;

if (userAge >= ageLimit) {
    console.log('uzeik....');
} else {
    console.log(`dar palauk ${ageLimit - userAge} metu...`);
} 

console.log('-----------------');

const diena = 9;

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokios dienos savaiteje nera');
}

console.log('----------------');

// kodo nestinimas

const arSvieciaSaule = false;
const arLyja = false;

let kaDaryti = 'nezinau';

if (arSvieciaSaule) {
    kaDaryti = 'eisim i kiema';
    if (arLyja) {
        kaDaryti = 'ziurim i vaivorykste'
    } else {
        kaDaryti = 'deginames pleziuke'
    }
} else {
    kaDaryti = 'kodinsim...';
    if (arLyja) {
        kaDaryti = 'koks skirtumas... vis vien busiu namie'
    } else {
        kaDaryti = 'stebim zvaigzdes'
    }
}

console.log(kaDaryti);

console.log('-------------------');

const day = 4;

if (day === 1) {
    console.log('pirm');
} else {
    if (day === 2) {
        console.log('ant');
    } else {
        if (day === 3) {
            console.log('trec');
        } else {
            console.log('nieko nesakau :P');  
        }
    }
}

console.log('-------------');

const dd = 2;
let kokiaDiena = 'tokia diena neegzistuoja';

if (dd === 1) {
    kokiaDiena = 'pirmadienis';
}

if (dd === 2) {
    kokiaDiena = 'antradienis';
}

console.log(kokiaDiena);

console.log('----------------');

const siandien = 4;

const dienuPavadinimai = [
    'pirmadienis',
    'antradienis',
    'treciadienis',
    'ketvirtadienis',
    'penktadienis',
    'sestadienis',
    'sekmadienis',
];

const savaitesDiena = dienuPavadinimai[siandien - 1];

if (savaitesDiena === undefined) {
    console.log('tokios dienos nera');
} else {
    console.log(savaitesDiena);
}