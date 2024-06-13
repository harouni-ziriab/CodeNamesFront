document.addEventListener('DOMContentLoaded', function () {
    const scoreDisplay = document.querySelector('.score-value');
    const codeValue = document.querySelector('.code-value');
    let score = 0;
    let indice = 1;
    let cardsInitialized = false;

    const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine', 'ugli', 'vanilla', 'watermelon', 'xigua', 'yam', 'zucchini', 'berry'];

    generateCards();

    function generateCards() {
        const cardContainer = document.querySelector('card_parts');
        cardContainer.innerHTML = ''; // Clear previous cards

        words.forEach(word => {
            const card = document.createElement('card');
            card.className = 'card';
            card.textContent = word;
            cardContainer.appendChild(card);

            // Randomly assign blue or red background color
            const randomColor = Math.random() < 0.5 ? 'blue' : 'red';
            card.style.backgroundColor = randomColor;

            // Add click event listener to update score
            card.addEventListener('click', () => updateScore(card));
        });

        if (!cardsInitialized) {
            cardsInitialized = true;
        }
    }

    function updateScore(card) {
        if (card.style.backgroundColor === 'blue') {
            score++;
        } else if (card.style.backgroundColor === 'red') {
            score = 0;
        }

        scoreDisplay.textContent = `Score: ${score}`;
    }

    document.querySelector('.submit-button').addEventListener('click', () => {
        const selectedNumber = document.querySelector('.number-selector').value;
        indice = parseInt(selectedNumber, 10);
        score = 0; // Reset score when a new indice is selected
        scoreDisplay.textContent = `Score: ${score}`;
        generateCards(); // Re-generate cards
    });

    document.querySelector('.copy-button').addEventListener('click', () => {
        navigator.clipboard.writeText(codeValue.textContent)
            .then(() => {
                alert('Code copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy code: ', err);
            });
    });

    // Populate the number selector with options from 1 to 25
    const numberSelector = document.getElementById('number-selector');
    for (let i = 1; i <= 25; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        numberSelector.appendChild(option);
    }
});
