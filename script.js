// chiedo all'utente se punta sul pari o il dispari e dopo il numero da lui scelto
const pariOdispari = prompt("pari o dispari");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("l'utente ha scelto " + pariOdispari + " ed ha puntato " + numeroUtente);

// assegno il numero casuale creato dalla funzione alla const numeroPc
const numeroPC = randomNumber();
console.log("Il PC ha puntato su " + numeroPC);

// con la funzione risultato sommo i 2 valori inseriti tra le parentesi ed asssegno il risultato alla const somma
const somma = risultato(numeroUtente, numeroPC);

// nel  caso in cui il giocatore punta pari e la somma diviso 2 da resto 0 oppure punta dispari e da resto diverso da 0 allora il giocatore ha vinto
if ((pariOdispari === "pari" && somma % 2 === 0) || (pariOdispari === "dispari" && somma % 2 !== 0)) {
    console.log("ha vinto il giocatore");
} else {
    console.log("ha vinto il pc");
}









// funzione per creare numero random del pc
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// funzione  che andrò ad utilizzare per sommare il numero dell'utente con quello del pc
function risultato(num1, num2) {
    let somma = num1 + num2;
    return somma;
}