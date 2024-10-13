const dirtCells = document.querySelectorAll('.dirt-cell');

dirtCells.forEach(cell => {
  cell.addEventListener('click', () => {
    cell.style.backgroundImage = 'none';
  });
});