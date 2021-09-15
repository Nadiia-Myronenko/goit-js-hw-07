const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const makeGalleryItemMarkup = image => {
    const { url, alt } = image;
    return `
    <li style="margin-right: 20px; list-style-type: none; width: 320px; border: 1px solid black; background-color:black; flex-wrap: wrap;">
        <img src = ${url} alt=${alt} width=100% style = "display:block; height: 100%; width: 100%; object-fit: contain;">
    </li>
`
};

const galleryEl = document.querySelector('#gallery');
galleryEl.style = 'display: flex;';
const makeGalleryMarkup = images.map(makeGalleryItemMarkup).join(' ');
galleryEl.insertAdjacentHTML('beforeend', makeGalleryMarkup);