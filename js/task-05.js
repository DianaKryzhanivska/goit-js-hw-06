/*

Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

*/

const refs = {
  input: document.querySelector("#name-input"),
  nameAppeal: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!refs.input) {
    refs.nameAppeal.textContent = `Hello, Anonymous`;
  }
  refs.nameAppeal.textContent = event.currentTarget.value;
}
