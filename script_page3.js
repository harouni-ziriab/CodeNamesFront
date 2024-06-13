document.addEventListener('DOMContentLoaded', function () {
    const numberSelector = document.getElementById('number-selector');
    for (let i = 1; i <= 9; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        numberSelector.appendChild(option);
    }

    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', function () {
        const wordInput = document.querySelector('.indice-input').value;
        const selectedNumber = numberSelector.value;
        alert(`Word: ${wordInput}, Number: ${selectedNumber}`);
    });
});

function generateCards() {
    const myfields = document.querySelector("card_parts");
    for (let i = 0; i < 25; i++) {
        const createFields = document.createElement("card");
        myfields.appendChild(createFields);
    }
}

document.addEventListener('DOMContentLoaded', generateCards);
