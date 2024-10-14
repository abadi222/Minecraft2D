const soilCells = document.querySelectorAll('.soil-cell');
const shovel = document.getElementById('shovel')

  shovel.addEventListener('click',function(){
  soilCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage = 'none';
  });
});
})

const stoneCells = document.querySelectorAll('.stone-cell');
const pickaxe = document.getElementById('pickaxe');
pickaxe.addEventListener('click',function(){
  stoneCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage = 'none';
  });
});
})


        