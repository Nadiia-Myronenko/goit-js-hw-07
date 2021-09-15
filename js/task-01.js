//Выводим в консоль количество категорий
const categoriesEl = document.querySelector('ul#categories');
const categoriesCounter = [...categoriesEl.children].reduce((acc) => acc + 1, 0);
console.log(`В списке ${categoriesCounter} категории`);

//Выводим в консоль заголовки и количество подкатегорий
[...categoriesEl.children].forEach((category) => {
    console.log(`Категория: ${category.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${[...category.querySelectorAll('li')].reduce((acc) => acc + 1, 0)}`);
}
);

