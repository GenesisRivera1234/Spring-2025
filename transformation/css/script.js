document.addEventListener('DOMContentLoaded', function() {
    // Select the grid container
    const gridContainer = document.querySelector('.grid-container');

    // Add an event listener to trigger a bigger identity shift
    gridContainer.addEventListener('mouseenter', function() {
        // Change background color of the whole page
        document.body.style.backgroundColor = "#ffeb3b"; // Yellow background
        gridContainer.style.transition = "all 1s ease";
        gridContainer.style.transform = "scale(1.2) rotate(10deg)"; // Scale and rotate entire grid
    });

    gridContainer.addEventListener('mouseleave', function() {
        // Reset to original state
        document.body.style.backgroundColor = "#ffffff"; // White background
        gridContainer.style.transform = "scale(1) rotate(0deg)"; // Reset transformations
    });
});

