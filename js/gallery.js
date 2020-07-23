let galleryImages = [];
let currentImage = 0;

createGallery = () => {
  const images = document.querySelector("noscript.image-container");

  if (images === null) {
    return;
  }

  currentImage = 0;

  images.insertAdjacentHTML("beforebegin", `
    <div class="gallery">
      <div id="gallery-image">
        <img id="gallery-current"></img>
        <div class="gallery-button gallery-button-disabled" id="prev-button"><i class="fas fa-chevron-left"></i></div>
        <div class="gallery-button" id="next-button"><i class="fas fa-chevron-right"></i></div>
      </div>
      <p id="gallery-caption"></p>
      <div id="gallery-images-container">
        <div id="gallery-images"></div>
      </div>
    </div>
  `);

  document.getElementById("gallery-images").innerHTML = images.textContent;

  galleryImages = document.getElementById("gallery-images").children;
  if (galleryImages.length === 1) {
    document.getElementById("gallery-images-container").remove();
  }
  updateCurrentImage();

  document.getElementById("prev-button").addEventListener("click", (e) => {
    if (currentImage > 0) {
      currentImage--;
      updateCurrentImage();
    }
  });

  document.getElementById("next-button").addEventListener("click", (e) => {
    if (currentImage < galleryImages.length - 1) {
      currentImage++;
      updateCurrentImage();
    }
  });

  document.querySelectorAll("#gallery-images img").forEach(elem => {
    elem.addEventListener("click", (e) => {
      currentImage = [...e.target.parentElement.children].findIndex(img => img.src === elem.src);
      updateCurrentImage();
    });
  })
}

updateCurrentImage = () => {
  document.getElementById("gallery-current").src = galleryImages[currentImage].src;
  document.getElementById("gallery-caption").textContent = galleryImages[currentImage].alt;

  if (currentImage === 0) {
    document.getElementById("prev-button").classList.add("gallery-button-disabled");
  }

  if (currentImage === galleryImages.length - 1) {
    document.getElementById("next-button").classList.add("gallery-button-disabled");
  }

  if (currentImage > 0) {
    document.getElementById("prev-button").classList.remove("gallery-button-disabled");
  }

  if (currentImage < galleryImages.length - 1) {
    document.getElementById("next-button").classList.remove("gallery-button-disabled");
  }
}

window.addEventListener("load", () => {
  createGallery();
})