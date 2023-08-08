/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  colorName: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick() {
  const randomHexColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomHexColor;
  refs.colorName.textContent = randomHexColor;
}
