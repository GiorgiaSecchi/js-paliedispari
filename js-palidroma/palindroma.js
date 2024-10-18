//# 1) Palidroma
//  Chiedere all’utente di inserire una parola
//  Creare una funzione per capire se la parola inserita è palindroma

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
// chiedere all'utente di inserire (prompt) una parola
const userWord = prompt("Inserisci una parola:");
console.log(userWord);

//! ELABORAZIONE
// la funzione dovrà verificare la parola inserita (userword) è palindroma o no
function isPalindrome(userWord) {
  // considerando l'intera lunghezza di (userWord)
  const userWordLength = userWord.length;
  console.log(userWordLength);

  // scorri PER OGNI carattere della parola (userWord) fino alla sua metà
  for (let i = 0; i < userWordLength / 2; i++) {
    // SE i caratteri di (userWord) non corriposndono ai caratteri all'estremità di (userWord)
    if (userWord[i] !== userWord[userWordLength - 1 - i]) {
      // restituisci
      return no;
    }
    // ALTRIMENTI
    else {
      return yes;
    }
  }
}

//! OUTPUT
const yes = userWord + " " + "è una parola palindroma!";
const no = userWord + " " + "non è una parola palindroma";
const result = alert(isPalindrome(userWord));
