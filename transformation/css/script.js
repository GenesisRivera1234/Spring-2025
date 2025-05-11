// JavaScript to change the color of a grid item on click
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        // Change background color on click
        item.style.backgroundColor = getRandomColor();  // Set a random color
    });
});

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

