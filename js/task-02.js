/*

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientsNewArr = [];

for (let i = 0; i < ingredients.length; i++) {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredients[i];
  itemEl.classList.add("item");
  ingredientsNewArr.push(itemEl);
}

ingredientsListEl.append(...ingredientsNewArr);
