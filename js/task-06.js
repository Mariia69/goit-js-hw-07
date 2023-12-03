function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const controls = document.getElementById("controls");
  const input = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");
  
  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }
  
  createButton.addEventListener("click", createBoxes);
  destroyButton.addEventListener("click", destroyBoxes);
  
  function createBoxes() {
    const amount = input.value.trim();
  
    if (amount < 1 || amount > 100) {
      alert("Please enter a number between 1 and 100");
      return;
    }
  
    destroyBoxes();
  
    const boxes = Array.from({ length: amount }, (_, index) => {
      const size = 30 + index * 10;
      const color = getRandomHexColor();
      return `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    });
  
    boxesContainer.insertAdjacentHTML("beforeend", boxes.join(""));
    input.value = "";}
   