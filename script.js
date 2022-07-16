const container = document.querySelector('.grid-container');
const pixelColorInput = document.querySelector('.pixel-color-input');

let gridWidth = 16;
let gridHeight = 16;


for (let i = 0; i < gridWidth * gridHeight; i++) {
  container.appendChild(document.createElement('div')).classList.add('grid-item');
}

let pixelColorSelected;

pixelColorInput.addEventListener('change', e => {
  console.log(e);
  const gridItem = document.querySelectorAll('.grid-item');
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

