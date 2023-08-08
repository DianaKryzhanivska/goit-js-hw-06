/*

Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.

    <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div>
*/

const counterValue = document.querySelector("#value");

const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

const counter = {
  count: 0,
  decrementCount() {
    this.count -= 1;
    counterValue.textContent = this.count;
  },
  incrementCount() {
    this.count += 1;
    counterValue.textContent = this.count;
  },
};

buttonMinus.addEventListener("click", counter.decrementCount.bind(counter));
buttonPlus.addEventListener("click", counter.incrementCount.bind(counter));
