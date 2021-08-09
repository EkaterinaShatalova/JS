const toggleMenu = () => {
    const menu = document.querySelector('menu');
    const btn = document.querySelector('main').querySelector('a');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    const scroll = event => {
        const target = event.target;
        if (target.closest('a') === btn && !menu.classList.contains('active-menu')) {
            event.preventDefault();
            const id = btn.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if ((target.closest('a') === btn) && menu.classList.contains('active-menu')) {
            event.preventDefault();
            handlerMenu();
            const id = btn.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // eslint-disable-next-line max-len
        else if (target.closest('div.menu') || target.classList.contains('close-btn') || (!target.closest('menu') && menu.classList.contains('active-menu'))) {
            event.preventDefault();
            handlerMenu();
        } else if (target.closest('ul.menu')) {
            if (target.tagName === 'A') {
                event.preventDefault();
                handlerMenu();
                const id = target.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (target.tagName === 'LI') {
                event.preventDefault();
                handlerMenu();
                const id = target.firstElementChild.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };
    document.addEventListener('click', scroll);
};
export default toggleMenu;