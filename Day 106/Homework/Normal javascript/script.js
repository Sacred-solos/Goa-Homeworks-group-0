document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment-btn');

    incrementButton.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
    });
});