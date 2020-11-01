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

    // creo una stringa con i numeri dell'array
    var numbersString = numbers.join(' - ');
    console.log(numbersString);

    // stampo in pagina i numeri da indovinare
    $('#random-numbers').text(numbersString);

    // creo e faccio partire un timer di 30 secondi
    var timer = 10;
    var clock = setInterval(function() {
        // decremento il tempo
        timer--;
        // stampo in pagina i secondi rimanenti
        $('#seconds-remaining').text(timer);
        // se sono arrivato a 0 interrompo il timer
        if(timer <= 0) {
            clearInterval(clock);
        }
    }, 1000);

    // dopo i 30 secondi nascondo i numeri casuali da indovinare
    setTimeout(function(){
      $('#random-numbers').empty();
    }, timer * 1000);

    // dopo 3,3 secondi chiedo all'utente i numeri che si ricorda
    setTimeout(function() {

        // chiedo all'utente i 5 numeri
        var userNumbers = [];
        for (var i = 0; i < 5; i++) {
            var userNumber = parseInt(prompt('Inserisici i numeri che ti ricordi'));
            userNumbers.push(userNumber);
        }
        console.log("numeri inseriti dall'utente: " + userNumbers);

        // verifico quanti numeri ha indovinato l'utente scorrendo l'array dei numeri inseriti
        var numbersGuessed = [];
        for (var i = 0; i < numbers.length; i++) {
            // verifico se i numeri random sono presenti nei numeri scelti dall'utente
            var currentNumber = numbers[i];
            // se l'array dei numeri scelti dall'utente include i numeri presi in esame singolarmente li inserisco nell'array dei numeri indovinati
            if
            (userNumbers.includes(currentNumber)) {
                numbersGuessed.push(currentNumber);
            }
        }
        console.log("numeri indovinati: " + numbersGuessed);
    }, timer * 1100);
});

// creo la funzione per generare numeri random
function getRndInteger(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
