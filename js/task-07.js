const rangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

rangeEl.addEventListener('change', onRangeChange);

function onRangeChange(event) {
    console.log(event.currentTarget.value);
    let fontSize = event.currentTarget.value;
    spanEl.style = `font-size: ${fontSize}px`;
}