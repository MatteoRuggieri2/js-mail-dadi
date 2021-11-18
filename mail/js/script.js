// MAIL

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Elenco delle mail
const mailList = ['matteo@gmail.com', 'marco@gmail.com', 'gianni@gmail.com', 'piero@gmail.com', ];


// Chiedo la mail - UserMail Request
const userMail = prompt('Qual è la tua mail?');
console.log('Email inserita: ' + userMail);

// Analizzo la lista delle mail
let mailFound = false;

for (let i = 0; i < mailList.length; i++) {
    const thisMail = mailList[i];
    // console.log(thisMail);

    // Controllo se la mail è nella lista
    if (userMail.toLowerCase() === thisMail) {
        mailFound = true;
    }

}

// Stampo messaggio finale
if (mailFound) {
    alert('Ok! Puoi accedere!')
} else {
    alert('Accesso non consentito');
}