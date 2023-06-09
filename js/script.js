console.log('JS OK')

// Recupero gli elementi dal DOM 
const countdownElement = document.getElementById('countdown');
const resultElement = document.getElementById('resultField');
const resetButton = document.getElementById('button');
const numbersListElement = document.querySelector('.numberList');


// Do un valore di partenza al timer
let timer = 10;

// Stampo in pagina il valore di partenza del timer 
countdownElement.innerText = 10;

// Creo una variabile con un intervallo di tempo di un secondo nel quale mi cambia il valore timer in pagina 
// TODO remove comment
const countdown = setInterval(function(){
    // Stampo in pagina il valore di partenza del timer 
    countdownElement.innerText = 10;
    countdownElement.innerText = --timer;
},1000)

/* Creo una funzione che mi generi un numero causale da 1 a 99. Per correttezza setto comunque un 'max value' nel caso un domani volessi cambiare il numero massimo */
const randomNumber = (max) => {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    return randomNumber;
}

// Creo un array vuoto che riempirò con un ciclo for più avanti 
let numbers = [];

// Ciclo for per inserire all'interno dell'array 5 numeri casuali  
for (let i = 0; i < 5; i++){
    numbers.push(randomNumber(99));
}

// Stampo in pagina i 5 numeri casuali all'interno di una lista
let numbersList = `<ul>`

for (let i = 0; i < 5; i++){
    numbersList += `<li>${numbers[i]}</li>`
}
numbersList += `</ul>`

numbersListElement.innerHTML = numbersList;


// Setto un timer che dopo 10 secondi mi fa sparire i numeri e mi crei un ciclo for per i prompt 
const countdownTimeout = setTimeout(function(){
    timer = 0;
    countdownElement.innerText = timer;
    clearInterval(countdown);
    numbersListElement.classList.add('d-none')
    // Stabilisco un punteggio in modo da poterlo richiamare più tardi
    let score = 0;
    // Creo un array dove salvare i numeri indovinati dall'utente in modo da poterli richiamare dopo
    let rightNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const userNumber = parseInt(prompt('Seleziona un numero da 1 a 99'));
        if (numbers.includes(userNumber)) {
            score++
            rightNumbers.push(userNumber);
        }

    }
    // Stampo in pagina il risultato con il punteggio
    score ? resultElement.innerText = `Daje! Hai fatto ${score} punti e hai indovinato questi numeri: ${rightNumbers} ` : resultElement.innerText = 'Neanche un punto, che scarso!'
},10000)
