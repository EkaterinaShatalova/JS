const pageInteraction = () => {
    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay  = document.querySelector('.modal-overlay');
    const btnUp = document.querySelector('.up');
    const services = document.querySelector('.title-h2');
    const belowServices = elem => {
        const rect = elem.getBoundingClientRect();
        return (
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    const scroll = event => {
        const target = event.target;
            if (target.tagName === 'A' && target.parentNode.tagName === 'LI') {
                const id = target.getAttribute('href');
                event.preventDefault();
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            } else if (target.classList.contains('callback-btn') || target.classList.contains('button-services') || target.classList.contains('absolute')) {
                event.preventDefault();
                modalCallback.style.display = 'block';
                modalOverlay.style.display = 'block';
            } else if (target.parentElement.classList.contains('modal-close') || target === modalOverlay) {
                event.preventDefault();
                modalCallback.style.display = 'none';
                modalOverlay.style.display = 'none';
            }
    };
    document.addEventListener('click', scroll);
    btnUp.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('body').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    document.addEventListener('scroll', () => {
        if (belowServices(services)) {
            btnUp.style.display = 'block';
        } else {
            btnUp.style.display = 'none';
        }
        
    });
};

export default pageInteraction;