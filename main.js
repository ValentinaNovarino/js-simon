// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// genero 5 numeri casulai diversi tra loro e li inserisco in un array
$(document).ready(function(){
    var numbers = [];
    while (numbers.length < 5) {
        // genero un numero casuale
        var number = getRndInteger(1, 100);
        // verifico che non sia un doppione e nel caso lo includo nell'array
        if (!numbers.includes(number)); {
            numbers.push(number);
        }
    }
});

// creo la funzione per generare numeri random
function getRndInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
