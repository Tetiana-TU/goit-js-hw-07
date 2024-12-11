function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberValue = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  const numbertype = numberValue.value;
  const valueMax = Number(numberValue.max);
  const valueMin = Number(numberValue.min);
  
  if (numbertype >= valueMin && numbertype <= valueMax) {
    createBoxes(numbertype);
  }
    numberValue.value = '';
});
function createBoxes(numbertype) {
  boxes.innerHTML = '';
  const boxesItems = [];
  let boxSize = 30;
  for (let i = 1; i <= numbertype; i += 1) {

    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    boxesItems.push(div);

    boxSize += 10;
  }
  boxes.append(...boxesItems);
}

const destroyBoxes = () => boxes.innerHTML = '';

buttonDestroy.addEventListener('click', destroyBoxes);