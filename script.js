const galleryImages = document.querySelectorAll('.gallery__image');
console.log(galleryImages);

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    removeActiveClass(galleryImages, 'gallery__image_active');
    addActiveClass(image, 'gallery__image_active');
  })
})

function removeActiveClass(elements, className) {
  elements.forEach((el) => {
    el.classList.remove(className);
  })
}

function addActiveClass(element, className) {
  element.classList.add(className);
}