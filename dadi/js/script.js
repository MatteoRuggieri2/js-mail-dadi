// GIOCO DEI DADI

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// Introduzione al gioco
alert(`
GIOCO DEI DADI

L'utente tira per primo i dadi, poi tira il pc.
Il numero più alto vince.

Clicca 'OK' per continuare
`);

// Estrazione numero utente
let userNumber = Math.floor(Math.random() * 6) + 1;
alert(`
Il tuo numero estratto è: ${userNumber}
`);

// Estrazione numero pc
let computerNumber = Math.floor(Math.random() * 6) + 1;
alert(`
Il numero estratto dal pc è: ${computerNumber}
`);

// Output - Confonto i numeri e stampo l'esito della partita
if (userNumber < computerNumber) {
    alert(`
    Hai perso! : (
    `);
} else if (userNumber > computerNumber){
    alert(`
    Hai Vinto! : )
    `);
} else {
    alert(`
    Pareggio!
    `);
}