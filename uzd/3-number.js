console.clear();

function numberLenght (number) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reiksme';
    }

    // Tvarkomes su minusu:
    // number = Math.abs(number);
    // Kitaip galima:
    // number = number < 0 ? -number : number;

    const numberAsString = '' + number;
    let count = numberAsString.length;

    if (number % 1 !== 0) {
        count--;
    }

    if (number < 0) {
        count--;
    }

    return count; 

    // Tvarkomes su kableliu, kad jo neskaiciuotu:
    // if (number % 1 !== 0) {
    //     return numberAsString.length - 1;
    // }
    // return numberAsString.length;
}

console.log(numberLenght(true));
console.log(numberLenght('asd'));
console.log(numberLenght(NaN));
console.log(numberLenght([]));
console.log(numberLenght({}));
console.log(numberLenght(undefined));
console.log(numberLenght(null));
console.log(numberLenght(numberLenght));
console.log(numberLenght(Infinity));
console.log(numberLenght(-Infinity));


console.log(numberLenght(5), '->', 1);
console.log(numberLenght(781), '->', 3);
console.log(numberLenght(23484858555), '->', 11);
console.log(numberLenght(3.14), '->', 3);
console.log(numberLenght(-3.14), '->', 3);
