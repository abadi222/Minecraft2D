//soil-removing soil cells and adding
const soilCells = document.querySelectorAll('.soil-cell');
const shovel = document.getElementById('shovel');
const soil= document.getElementById('Soil')

  shovel.addEventListener('click',function(){
  soilCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage = 'none';
  });
});
})
soil.addEventListener('click',function(){
  soilCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage = 'url("assets/soil1.png")';
  });
});
})


//stone- removing stone and adding
const stoneCells = document.querySelectorAll('.stone-cell');
const pickaxe = document.getElementById('pickaxe');
const stone =document.getElementById('Stone');

pickaxe.addEventListener('click',function(){
  stoneCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage = 'none';
   });
  });
})

stone.addEventListener('click',function(){
  stoneCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage = 'url("assets/Stone.jpg")';
  });
});
})

//sky- adding trees and leaves and then removing
const skyCells = document.querySelectorAll('.sky-cell');
const wood = document.getElementById('Wood')
const leaf = document.getElementById('Leaf')
const Axe = document.getElementById('axe')

wood.addEventListener('click',function(){
  skyCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage='url("assets/wood.png")';
  });
});
})
leaf.addEventListener('click',function(){
  skyCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage='url("assets/leaves.png")';
  });
});
})
Axe.addEventListener('click',function(){
  skyCells.forEach(cell => { cell.addEventListener('click', () => {
    cell.style.backgroundImage='none';
  });
});
})