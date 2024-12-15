let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {

    slides.forEach(slide => {
        slide.style.opacity = 0;
    });

    slides[slideIndex].style.opacity = 1;


    slideIndex = (slideIndex + 1) % totalSlides;

    setTimeout(showSlides, 4000);
}

let position = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length-5;

function moveLeft() {
    position--;
    if (position < 0) {
        position = totalImages - 1;
    }
    updateCarousel();
}

function moveRight() {
    position++;
    if (position >= totalImages) {
        position = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const imageWidth = carouselImages.querySelector('img').clientWidth;
    carouselImages.style.transform = `translateX(-${position * imageWidth}px)`;
}

function LoadAnotherWebsite(url) {
    window.location.href = url;
}
