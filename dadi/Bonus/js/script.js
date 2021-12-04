// GIOCO DEI DADI - BONUS

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



const playButton = document.querySelector('.play-button');
playButton.addEventListener("click", game);
console.log(playButton)

const userNumberHTML = document.querySelector('.user-number');
const pcNumberHTML = document.querySelector('.pc-number');

const userNumberContainer = document.querySelector('#userNumber');
const pcNumberContainer = document.querySelector('#pcNumber');

// GAME
function game() {

    // Estrazione numero utente
    let userNumber = Math.floor(Math.random() * 6) + 1;
    userNumberHTML.classList.add('active')
    userNumberContainer.innerHTML = `${userNumber}`

    // alert(`
    // Il tuo numero estratto è: ${userNumber}
    // `);

    // Estrazione numero pc
    let computerNumber = Math.floor(Math.random() * 6) + 1;
    pcNumberHTML.classList.add('active')
    pcNumberContainer.innerHTML = `${computerNumber}`
    // alert(`
    // Il numero estratto dal pc è: ${computerNumber}
    // `);

    // Output - Confonto i numeri e stampo l'esito della partita
    // if (userNumber < computerNumber) {
    //     alert(`
    //     Hai perso! : (
    //     `);
    // } else if (userNumber > computerNumber){
    //     alert(`
    //     Hai Vinto! : )
    //     `);
    // } else {
    //     alert(`
    //     Pareggio!
    //     `);
    // }

    // alert(`
    // Per rigiocare ricarica la pagina o premi "F5".
    // `);
}