// Todo Esercizio 1. Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri











// Todo Esercizio 2. Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.














// Todo Esercizio 3. Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altroes. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


var primoArray = ['a','b','c','d','e'];
var secondoArray = [1,2,3,4,5];

function unisci(array1, array2){

    var arrayCumulativo = [];
    
    // * Mettiamo un controllo: SE la lunghezza dei due array da cumulare è uguale, allora fai il FOR, altrimenti alert.

    if (array1.length == array2.length){

        // * In questo caso mettere i < array1.length o array2.length è la stessa cosa, perché richiediamo la stessa lunghezza.

        for(var i = 0; i < array1.length; i++){
            arrayCumulativo.push(array1[i], array2[i]);
        }
        return arrayCumulativo;
    } else {
        alert('La lunghezza dei due array non è uguale. Riprovare')
    }
   
}

// * Creiamo una variabile per far 'attivare' la funzione, quindi facciamo il console.log della variabile (o i vari document.getElementById...)

var terzoArray = unisci(primoArray, secondoArray);
console.log (terzoArray);








// Todo Esercizio 4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

var parola = prompt('Inserisci una parola');



function capitalize(string){

    // * Nella funzione mettiamo la string = a string[0], ovvero la prima lettera della parola, che dovrà essere maiuscola con toUpperCase + string.substring(1) il quale indica che tutto ciò che ne segue della stessa parola, sarà trascritta in minuscolo.
    
    string = string[0].toUpperCase() +  string.substring(1).toLowerCase();
    
    return string;

    // ! Un altro modo per scrivere all'interno della funzione è il seguente:

    // ? return string = string[0].toUpperCase() +  string.substring(1).toLowerCase();

    
}

console.log(capitalize(parola));