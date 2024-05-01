
// chiedo all'utente di inserire la parola
const parola = prompt("Inserisci una parola");
console.log(parola);
// creo un array vuoto 
let reverseParola = [];
// invece di partire dal basso parto dall'ultimo carattere della parola inserita e per ogni iterazione del ciclo lo pusho nell'array vuoto
for (let i = parola.length - 1; i > -1; i--) {
    reverseParola.push(parola[i]);
}
// unisco ll'array sottoforma di stringa normale
const finalWord = reverseParola.join("");
console.log(finalWord);
// controllo se la parola inserita è polindroma o no
if (parola === finalWord) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
}


//DA MODIFICARE POSSIBILITA' DI RAGGRUPPARE IN FUNZIONE 