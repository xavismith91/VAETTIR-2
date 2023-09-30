const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));

// Clona el primer y último slide para el efecto continuo
const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];
track.appendChild(firstSlide.cloneNode(true));
track.insertBefore(lastSlide.cloneNode(true), firstSlide);

const slideWidth = slides[0].getBoundingClientRect().width;

// Alinea los slides horizontalmente
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

// Función para mover el carrusel
const moveToSlide = (track, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
};

// Inicializa el carrusel en el primer slide
let currentIndex = 1;
moveToSlide(track, slides[currentIndex]);

// Función para cambiar al siguiente slide
const nextSlide = () => {
    currentIndex++;
    if (currentIndex >= slides.length - 1) {
        currentIndex = 1;
        track.style.transition = 'none';
        moveToSlide(track, slides[currentIndex]);
    }
    setTimeout(() => {
        track.style.transition = 'transform 0.5s ease-in-out';
        moveToSlide(track, slides[currentIndex]);
    });
};

// Cambia al siguiente slide cada 3 segundos (ajusta según sea necesario)
setInterval(nextSlide, 3000);