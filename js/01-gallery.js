import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);





gallery.addEventListener("click", onGalleryClick);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `;
    })
    .join("");
};



function onGalleryClick(evt) {
  evt.preventDefault();

  const clickedElement = evt.target;
  const clickedLink = clickedElement.closest(".gallery__link");

  if (clickedLink) {
    const largeImageURL = clickedLink.href;

    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="800" height="600">
    `);

    instance.show();
  }
};
