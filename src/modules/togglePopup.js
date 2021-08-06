const togglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    const animation = () => {
        popupContent.style.left = 0;
        let count = 0;
        let flyInterval;
        const flyAnimate = function() {
            count++;
            flyInterval = requestAnimationFrame(flyAnimate);
            if (count * 30 <= document.documentElement.getBoundingClientRect().width / 2) {
                popupContent.style.left = `${count * 30}px`;
            } else {
                cancelAnimationFrame(flyInterval);
            }
        };
        flyInterval = requestAnimationFrame(flyAnimate);
    };
    document.addEventListener('click', event => {
        if (event.target.classList.contains('popup-btn')) {
            if (document.documentElement.clientWidth >= 768) {
                popup.style.display = 'block';
                animation();
                popup.style.height = `${document.documentElement.clientHeight}px`;
            } else {
                popup.style.display = 'block';
                popupContent.style.left = `${document.documentElement.clientWidth/2}px`;
            }
        }
    });

    popup.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }

    });
};
export default togglePopup;