const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

renderButton.addEventListener('click', onRenderButtonClick);
destroyButton.addEventListener('click', onDestroyButtonClick);

function onRenderButtonClick() {
    let amount = document.querySelector("#controls input").value;
    createBoxes(amount);
}

function createBoxes(amount) {
    const basicSize = 30;
    var fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const size = basicSize + i * 10;
        const div = document.createElement("div");
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
}

function onDestroyButtonClick() {
    boxes.innerHTML = "";
}

function random() {
    return Math.floor(Math.random() * 256);
}