const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listInsert = function (items) {
    const ingredientsEl = document.querySelector('ul#ingredients');

    const itemsArray = items.map((item) => {
        const itemEl = document.createElement('li');
        itemEl.textContent = (item);
        return itemEl;
    });

    ingredientsEl.append(...itemsArray);
};
listInsert(ingredients);