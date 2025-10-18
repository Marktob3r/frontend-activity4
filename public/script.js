const btn = document.getElementById('colorBtn');
let isRed = false;

btn.addEventListener('click', () => {
    isRed = !isRed;
    btn.style.color = isRed ? 'red' : 'black';
    btn.textContent = isRed ? 'Red text!' : 'Click me';
});