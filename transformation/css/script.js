// JavaScript to test basic click event
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function() {
        alert('Item clicked');  // Show alert when clicked
    });
});
