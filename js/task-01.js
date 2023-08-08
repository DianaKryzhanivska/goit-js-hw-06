/*

Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

*/

const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const sectionEl = [...categoriesEl.children];

sectionEl.forEach((element) => {
  const titleEl = element.querySelector("h2").textContent;
  const quantityOfItemsEl = element.querySelectorAll("li");

  console.log(`Category:  ${titleEl}, Elements: ${quantityOfItemsEl.length}`);
});
