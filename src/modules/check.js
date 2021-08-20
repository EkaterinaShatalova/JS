const check = () => {
    document.addEventListener('input', event => {
        const target = event.target;
        if (target.name === "fio") {
            target.value = target.value.replace(/[^А-Яа-я ]/gi, "");
        } else if (target.name === "tel") {
            target.value = target.value.replace(/[^0-9+]/, "");
        }
    });
    document.addEventListener('blur', event => {
        if (event.target.tagName === 'INPUT' && event.target.value != 0) {
            event.target.value = event.target.value.replace(/^[\s-]+/, '');
            event.target.value = event.target.value.replace(/[\s-]+$/, '');
            event.target.value = event.target.value.replace(/-+/g, '-');
            event.target.value = event.target.value.replace(/\s+/g, ' ');
            if (event.target.name === "fio") {
                event.target.value = event.target.value.split(' ').map(elem => elem[0].toUpperCase() + elem.toLowerCase().substring(1)).join(' ');
            } else if (event.target.name === "tel") {
                const phonePattern = new RegExp(/^\+7\d{10}$/);
                if (!phonePattern.test(event.target.value)) {
                    event.target.value = '';
                    alert('Введите корректный номер телефона');
                }
            }
        }
    }, true);
};

export default check;