const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputValue = event.currentTarget.value;
    /* console.log(inputValue.length);
      console.log(validationInputEl.getAttribute('data-length'));*/

    if (inputValue.length === Number(validationInputEl.getAttribute('data-length'))) {
        validationInputEl.classList.add('valid')
    } else validationInputEl.classList.add('invalid')

}