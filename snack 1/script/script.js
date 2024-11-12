/*
CONSEGNA:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

/*Definizione array di oggetti "bicicletta"(nome e peso)*/
const biciclette = [
    {nome: "Cannondale", peso: 7.5},
    {nome: "Trek", peso: 8},
    {nome: "Specialized", peso: 7.8},
    {nome: "Bianchi", peso: 7.6},
    {nome: "Scott", peso: 7.7},
];

let posizPesoMin = -1;
let pesoMin = 5000;
for(let i = 0; i < biciclette.length; i++){
    if(biciclette[i].peso < pesoMin){
        pesoMin = biciclette[i].peso;
        posizPesoMin = i;
    }
        
}

console.log("La bicicletta con peso minore di tutte è "+biciclette[posizPesoMin].nome+" il cui peso è "+biciclette[posizPesoMin].peso+"kg");
