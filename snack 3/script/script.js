/*
CONSEGNA:
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

function subSequenceExtract(array, a, b){
    if(a >= b){
        console.log("Errore! a deve essere minore di b!");
        return [];
    }
    else{
        return array.slice(a, b);
    }
}

console.log(subSequenceExtract([10, 20, 30, 40, 50, 60], 2, 5));