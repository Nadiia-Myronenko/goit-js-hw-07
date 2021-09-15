const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementEl.addEventListener('click', onDecrementButtonClick);
incrementEl.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    valueEl.textContent = Number(valueEl.textContent) - 1;

}
function onIncrementButtonClick() {
    valueEl.textContent = Number(valueEl.textContent) + 1;
}
