const imageContainers = document.querySelectorAll('.image-container');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const modalImage = document.querySelector('#modal-image');
const closeButton = document.querySelector('#close-button');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

let currentImageContainer;

imageContainers.forEach(container => {
    container.addEventListener('click', event => {
        modal.style.display = 'block';
        modalImage.src = container.querySelector('img').src;
        currentImageContainer = container;
    });
});

closeButton.addEventListener('click', event => {
    modal.style.display = 'none';
});

modal.addEventListener('click', event => {
    if (!modalContent.contains(event.target)) {
      modal.style.display = 'none';
    }
  });

prevButton.addEventListener('click', event => {
    const prevContainer = currentImageContainer.previousElementSibling;
    if (prevContainer) {
        modalImage.src = prevContainer.querySelector('img').src;
        currentImageContainer = prevContainer;
    }
});

nextButton.addEventListener('click', event => {
    const nextContainer = currentImageContainer.nextElementSibling;
    if (nextContainer) {
        modalImage.src = nextContainer.querySelector('img').src;
        currentImageContainer = nextContainer;
    }
});  
