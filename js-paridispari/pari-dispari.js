//! Esercizio di oggi: Palindromia e pari e dispari
//  nome repo: js-paliedispari

//# 2) Pari e Dispari
//  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  Sommiamo i due numeri
//  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//  Dichiariamo chi ha vinto.

//** Consigli del giorno
//  1. Scriviamo sempre in italiano i passaggi che vogliamo fare
//  2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//? Domande da  farsi quando si crea una funzione:
//? 1. Come dovrebbe chiamarsi?
//? 2. Ho bisogno di parametri?
//? 3. Devo restituire un valore?
//? 4. Se sì, di che tipo?

/***************************************************************************** */

//! RACCOLTA DATI
// chiedere all'utente di scegliere pari o dispari e inserire la scelta (input)
let userChoise = prompt("Pari o Dispari ? \n Scrivi la tua scelta:");
console.log(userChoise);

// chiedere all'utente di inserire un numero da 1 a 5
let userNumber = prompt("Scegli un numero da 1 a 5:");
console.log(userNumber);

//! ELABORAZIONE
// funzione che genera un un numero random (sempre da 1 a 5) per il computer
