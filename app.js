
const nameInput = document.getElementById('name-input');

const nameButton = document.getElementById('name-button');

const nameResult = document.getElementById('name-result')

nameButton.addEventListener('click', () => {
    const userWords = nameInput.value;
    nameResult.textContent = userWords;

})



