function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

//When the Create button is clicked, the entered value is checked and if it matches the valid range(1 to 100),
//then the appropriate number of div elements are created with different colors and sizes.
//The Destroy button deletes all created div elements.
createBtn.addEventListener("click", () => {
  const amount = input.value;
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  let boxesMarkup = "";

  for (let i = 0; i < amount; i++) {
    const boxColor = getRandomHexColor();
    boxesMarkup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};"></div>`;
    boxSize += 10;
  }

  boxesContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
