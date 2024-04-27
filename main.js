// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
// Variante:
// Prova ad ordinali in modo crescente.


function ordinaArrayDec(inputArraydec) {
    return inputArraydec.sort((a, b) => a - b).reverse();
}

function ordinaArrayCre(inputArraycre) {
    return inputArraycre.sort((a, b) => a - b);
}

let array1 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
let array2 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
let check1 = ordinaArrayDec(array1);
let check2 = ordinaArrayCre(array2);

console.log(check1);
console.log(check2);
