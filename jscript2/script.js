// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const array = [];
let numbers = 0;

for (let i = 0; i < 10; i++) {
    let number = getRandomInteger(1,50);
    array.push(number);
}

for (let x = 0; x < array.length; x+=2) {
   numbers += array[x];
//    console.log(array[x]) 
}

console.log(numbers)
console.log(array);