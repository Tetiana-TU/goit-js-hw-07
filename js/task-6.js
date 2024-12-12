function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputnumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  const numbertype = inputnumber.value;
  const valueMax = Number(inputnumber.max);
  const valueMin = Number(inputnumber.min);

  if (numbertype >= valueMin && numbertype <= valueMax) {
    createBoxes(numbertype);
  }
  inputnumber.value = '';
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
const destroyBoxes = () => (boxes.innerHTML = '');

btnDestroy.addEventListener('click', destroyBoxes);
