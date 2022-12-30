const database = [
  { id: 1, url: "people/2/1h.jpg", text: "Image 1", loading: "lazy" },
  { id: 2, url: "people/2/2h.jpg", text: "Image 2", loading: "lazy" },
  { id: 3, url: "people/2/3h.jpg", text: "Image 3", loading: "lazy" },
  { id: 4, url: "people/2/4h.jpg", text: "Image 4", loading: "lazy" },
  { id: 5, url: "people/2/5h.jpg", text: "Image 5", loading: "lazy" },
  { id: 6, url: "people/2/6h.jpg", text: "Image 6", loading: "lazy" },
  { id: 7, url: "people/2/7h.jpg", text: "Image 7", loading: "lazy" },
  { id: 8, url: "people/2/8h.jpg", text: "Image 8", loading: "lazy" },
  { id: 9, url: "people/2/9h.jpg", text: "Image 9", loading: "lazy" },
  { id: 10, url: "people/2/10h.jpg", text: "Image 10", loading: "lazy" },
  { id: 11, url: "people/2/11h.jpg", text: "Image 11", loading: "lazy" },
  { id: 12, url: "people/2/12h.jpg", text: "Image 12", loading: "lazy" },
  { id: 13, url: "people/2/13h.jpg", text: "Image 13", loading: "lazy" },
  { id: 14, url: "people/2/14h.jpg", text: "Image 14", loading: "lazy" },
];

// Get the images element
const imagesElement = document.querySelector(".images");

// Set up the IntersectionObserver to watch for when images are about to be displayed in the viewport
const observer = new IntersectionObserver(entries => {
  // Check each entry
  entries.forEach(entry => {
    // If the image is about to be displayed in the viewport, load the image
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '0px 0px 250px 0px'
});

// Iterate over the database array
database.forEach((image) => {
  // Create a new image container div
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  // Create an image element
  const img = document.createElement("img");
  img.alt = image.text;
  img.classList.add("img-gallery");
  img.dataset.src = image.url;

  // Observe the image for intersection
  observer.observe(img);

  // Append the image to the image container
  imageContainer.appendChild(img);

  // Append the image container to the images element
  imagesElement.appendChild(imageContainer);
});
