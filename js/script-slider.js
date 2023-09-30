const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');

const totalItems = items.length;
const itemWidth = items[0].clientWidth;
const totalWidth = itemWidth * totalItems;

track.style.width = totalWidth + 'px';

function startCarousel() {
    setInterval(() => {
        const currentTransform = window.getComputedStyle(track).getPropertyValue('transform');
        const currentX = new WebKitCSSMatrix(currentTransform).m41;
        const newItemPosition = currentX - itemWidth;
        track.style.transition = 'transform 0.3s ease-in-out';
        track.style.transform = `translateX(${newItemPosition}px)`;
        track.addEventListener('transitionend', () => {
            if (currentX === -totalWidth) {
                track.style.transition = 'none';
                track.style.transform = `translateX(0px)`;
            }
        });
    }, 2000); // Cambia esta cifra para ajustar la velocidad del carrusel
}

startCarousel();
