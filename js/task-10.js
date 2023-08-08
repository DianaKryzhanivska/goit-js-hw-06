/*

Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

let baseSize = 30;

function createBoxes() {
  const amount = refs.inputEl.value;

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${baseSize}px`;
    box.style.height = `${baseSize}px`;
    baseSize += 10;
    box.style.border = "1px solid black";
    const randomHexColor = getRandomHexColor();
    box.style.backgroundColor = randomHexColor;

    refs.container.append(box);

    console.log(refs.container);
  }
}

function destroyBoxes() {
  refs.inputEl.value = "";
  refs.container.innerHTML = "";
}
