// GIOCO DEI DADI - BONUS

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Seleziono i bottoni
const playButton = document.querySelector('.play-button');
const clearButton = document.querySelector('.clear-button');
clearButton.classList.add('btn-disabled')

playButton.addEventListener("click", game);

// Seleziono i contenitori
const userNumberHTML = document.querySelector('.user-number');
const pcNumberHTML = document.querySelector('.pc-number');

// Seleziono il container dei numeri esratti
const userNumberContainer = document.querySelector('#userNumber');
const pcNumberContainer = document.querySelector('#pcNumber');

// Seleziono il result container
const esitContainer = document.querySelector('.result');

// GAME
function game() {
    playButton.classList.add('btn-disabled')

    // Estrazione numero utente
    let userNumber = extractNumber();
    pcNumberHTML.classList.remove('active')
    userNumberHTML.classList.add('active')
    userNumberContainer.innerHTML = `${userNumber}`

    setTimeout(function() {
        // Estrazione numero pc
        let computerNumber = extractNumber();
        userNumberHTML.classList.remove('active')
        pcNumberHTML.classList.add('active')
        pcNumberContainer.innerHTML = `${computerNumber}`
        setTimeout(function() {
            pcNumberHTML.classList.remove('active')

            // Output - Confonto i numeri e stampo l'esito della partita
            if (userNumber < computerNumber) {
                esitContainer.innerHTML = 'Hai perso! : ('

            } else if (userNumber > computerNumber){
                esitContainer.innerHTML = 'Hai Vinto! : )'

            } else {
                esitContainer.innerHTML = 'Pareggio!'
            }

            // Game Reset
            clearButton.classList.remove('btn-disabled')
            clearButton.addEventListener("click", function() {
                clearButton.classList.add('btn-disabled')
                userNumberContainer.innerHTML = ``
                pcNumberContainer.innerHTML = ``
                esitContainer.innerHTML = ''
                playButton.classList.remove('btn-disabled')

            });

        }, 3000);
        
    }, 3000);

}


// FUNCTION

// Questa funzione estrae 1 numero casuale da 1 a 6, entrambi compresi.
// return: Ritorna un numero intero casuale da 1 a 6
function extractNumber() {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
}