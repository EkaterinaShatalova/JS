const accordeon = () => {
    const acrd = document.querySelector('.accordeon')
    const btns = acrd.querySelectorAll('.element')
    const content = acrd.querySelectorAll('.element-content')
    btns.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('active')) {
                btns.forEach(elem => {
                    elem.classList.remove('active');
                });
                content.forEach(elem => {
                    elem.style.display = 'none';
                });
                elem.classList.add('active');
                content[i].style.display = 'block';
            }
            else {
                btns.forEach(elem => {
                    elem.classList.remove('active');
                })
                content.forEach(elem => {
                    elem.style.display = 'none';
                });
            }
        });
    });
};

export default accordeon;
