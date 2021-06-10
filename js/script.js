// Todo Esercizio 1. Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri











// Todo Esercizio 2. Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

var parola1 = prompt('Scrivere la prima parola');
var parola2 = prompt('Scrivere la seconda parola');

parola1 = parola1[0].toUpperCase() +  parola1.substring(1).toLowerCase();
parola2 = parola2[0].toUpperCase() +  parola2.substring(1).toLowerCase();



function lunghezza(par1, par2){

    var risultato = par1 + ' è più lunga di ' + par2;

    if (par1.length == par2.length){
        risultato = par1 + ' e ' + par2 + ' hanno la stessa lunghezza';
    } else if (par1.length < par2.length){
        risultato = par2 + ' è più lunga di ' + par1;
    }
    return risultato;
}

var parole = lunghezza(parola1, parola2);

document.getElementById('div').innerHTML = parole;








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

    // * Nella funzione mettiamo la string = string[0], ovvero la prima lettera della parola [0], che dovrà essere maiuscola con toUpperCase + string.substring(1) il quale indica che tutto ciò che ne segue della stessa parola, sarà trascritta in minuscolo.
    
    string = string[0].toUpperCase() +  string.substring(1).toLowerCase();
    
    return string;

    // ! Un altro modo per scrivere all'interno della funzione è il seguente:

    // ? return string = string[0].toUpperCase() +  string.substring(1).toLowerCase();

    
}

var maiuscola = capitalize(parola);
console.log(maiuscola);


// * oppure
// * console.log(capitalize(parola));