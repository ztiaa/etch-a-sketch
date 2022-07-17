const container = document.querySelector('.grid-container');
const pixelColorInput = document.querySelector('.pixel-color-input');
const gridWidthDiv = document.querySelector('.grid-width');
const gridHeightDiv = document.querySelector('.grid-height');
let gridWidth = 16;
let gridHeight = 16;
let gridItem;
let pixelColorSelected;

for (let i = 0; i < gridWidth * gridHeight; i++) {
  container.appendChild(document.createElement('div')).classList.add('grid-item');
}

gridItem = document.querySelectorAll('.grid-item');

gridWidthDiv.addEventListener('change', e => {
  gridWidth = e.target.value;
  if (gridWidth > 100) return;
  
  container.replaceChildren();

  for (let i = 0; i < gridWidth * gridHeight; i++) {
    container.appendChild(document.createElement('div')).classList.add('grid-item');
  } 
  gridItem = document.querySelectorAll('.grid-item')
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    gridItem[i].style.width = 800/gridWidth + 'px';
    gridItem[i].style.height = 800/gridHeight + 'px';
  }
  
})

gridHeightDiv.addEventListener('change', e => {
  gridHeight = e.target.value;
  if (gridHeight > 100) return;
  
  container.replaceChildren();

  for (let i = 0; i < gridWidth * gridHeight; i++) {
    container.appendChild(document.createElement('div')).classList.add('grid-item');
  } 
  gridItem = document.querySelectorAll('.grid-item')
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    gridItem[i].style.width = 800/gridWidth + 'px';
    gridItem[i].style.height = 800/gridHeight + 'px';
  }
})

pixelColorInput.addEventListener('change', e => {
  console.log(e);
  pixelColorSelected = e.target.value;
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    gridItem[i].style.setProperty('--color',pixelColorSelected);
  }

})

container.addEventListener('mouseover', e => {
  console.log(e);
  e.stopPropagation();
  e.target.style.backgroundColor = pixelColorSelected;
})