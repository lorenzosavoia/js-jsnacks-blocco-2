// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let names = ["luca ", "mario ", "lorenzo ", "marcolino ", "pazzo "];

let surname = ["Savoia", "cesare", "pilato", "sgravato", "marenghi"];

let nameSurname = [];


while (nameSurname.length < 5) {
    let randomName = getRandomInteger(0,4);
    let randomSurname = getRandomInteger(0,4);
    if (!nameSurname.includes(names[randomName] + surname[randomSurname])) {
        nameSurname.push(names[randomName] + surname[randomSurname])    
    }    
}
console.log(nameSurname);