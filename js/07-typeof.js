console.clear();
/*
TYPEOF - operatorius duomens tipo nustatymui.
*/

const a = typeof 5;
console.log(a);

const b = typeof '';
console.log(b);

const c = typeof true;
console.log(c);

function sum(a, b) {
    return a + b;
}

const d = typeof sum;
console.log(d);

const e = typeof [];
console.log(e);

const f = typeof typeof 214562;
console.log(f);

const g = typeof undefined;
console.log(g);

function example () {
    return undefined;
}
console.log('>>>', typeof example ());