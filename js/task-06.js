const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputValue = event.currentTarget.value;

    if (inputValue.length === Number(validationInputEl.getAttribute('data-length'))) {
        validationInputEl.classList.add('valid');
        validationInputEl.classList.remove('invalid');
    } else {
        validationInputEl.classList.remove('valid');
        validationInputEl.classList.add('invalid');
    }
}
