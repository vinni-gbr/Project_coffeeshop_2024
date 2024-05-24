let isFlipped = false;
const image = document.querySelector('.page');

image.addEventListener('mouseover', () => {
    if (!isFlipped) {
        image.classList.add('is-flipped');
        isFlipped = true;
    } else {
        image.classList.remove('is-flipped');
        isFlipped = false;
    }
});