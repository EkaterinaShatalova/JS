const slider = () => {
    const topSlider = document.querySelector('.top-slider');
    const item = topSlider.querySelectorAll('.item');
    const table = document.querySelectorAll('.table');
    let currentSlide = 0;
    let interval;
    table[0].classList.add('active');
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    const autoPlaySlide = () => {
        nextSlide(item, currentSlide, 'item-none');
        prevSlide(table, currentSlide, 'active');
        currentSlide++;
        if (currentSlide >= item.length) {
            currentSlide = 0;
        }
        prevSlide(item, currentSlide, 'item-none');
        nextSlide(table, currentSlide, 'active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    startSlide(3000);
};

export default slider;