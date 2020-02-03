const phrases = document.querySelectorAll('.rotator__case'),
    delayChange = () => setTimeout( () => {
        changeSlide();
        delayChange();
    }, phrases[currentIndex].dataset.speed );

const changeSlide = () => {
    const nextIndex = currentIndex === phrases.length - 1 ? 0 : currentIndex + 1;
    phrases[currentIndex].classList.remove('rotator__case_active');
    phrases[nextIndex].classList.add('rotator__case_active');
    phrases[nextIndex].style.color = phrases[nextIndex].dataset.color;
    currentIndex = nextIndex;
}

let currentIndex = 0;

delayChange();