/*
CONSEGNA:
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
    {nome: "Juventus", punti_fatti: 0, falli_subiti: 0},
    {nome: "Inter", punti_fatti: 0, falli_subiti: 0},
    {nome: "Napoli", punti_fatti: 0, falli_subiti: 0},
    {nome: "Milan", punti_fatti: 0, falli_subiti: 0},
    {nome: "Roma", punti_fatti: 0, falli_subiti: 0}
];


function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

for(let i = 0; i < squadre.length; i++){
    squadre[i].punti_fatti = randomInteger(0, 102);
    squadre[i].falli_subiti = randomInteger(200, 750);
}

const array2 = [];
for(let i = 0; i < squadre.length; i++){
    array2.push({nome : squadre[i].nome, falli_subiti:squadre[i].falli_subiti});
}

console.log("Array originale:", squadre);
console.log("Array con solo nome e falli subiti:", array2);
