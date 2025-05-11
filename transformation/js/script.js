// Simple effect: when clicked, grid items toggle visibility
document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('hidden');
  });
});
