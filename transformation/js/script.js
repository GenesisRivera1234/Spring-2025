// When a shape is clicked, it disappears. Click again to bring it back.
document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('hidden');
  });
});

