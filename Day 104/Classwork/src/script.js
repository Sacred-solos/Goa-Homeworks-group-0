let count = 0;

document.getElementById('plusBtn').addEventListener('click', function() {
    count++;
    document.getElementById('number').textContent = count;
});

document.getElementById('minusBtn').addEventListener('click', function() {
    count--;
    document.getElementById('number').textContent = count;
});