const container = document.querySelector('.grid-container');

for (let i = 0; i < 16**2; i++) {
  container.appendChild(document.createElement('div')).classList.add(`grid-item`);
}


container.addEventListener('click', e => {
  console.log(e);
  e.stopPropagation();
  e.target.style.backgroundColor = 'black';
})

container.addEventListener('mouseover', e => {
})

