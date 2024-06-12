const CreePartie = document.getElementById('CreePartie');
const RejoindrePartie = document.getElementById('RejoindrePartie');
const container = document.getElementById('container');



// For the "Créer une partie" button
const createGameButton = document.getElementById('create-game-button');
createGameButton.addEventListener('click', () => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = "page3.html"; // Redirect to page3.html
});

// For the "Rejoindre une partie" button
const joinGameButton = document.getElementById('join-game-button');
joinGameButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = "page3.html"; // Redirect to page3.html
});


// For switching between sign-up and sign-in forms
CreePartie.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

RejoindrePartie.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
