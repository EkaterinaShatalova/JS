const check = () => {
    document.addEventListener('input', event => {
        const target = event.target;
        if (target.classList.contains('calc-item')) {
            target.value = target.value.replace(/\D\./, "");
        } else if (target.name === "user_name") {
            target.value = target.value.replace(/[^А-Яа-я ]/gi, "");
        } else if (target.name === "user_phone") {
            target.value = target.value.replace(/[^0-9+]/, "");
        } else if (target.name === "user_email") {
            target.value = target.value.replace(/[^A-Za-z-_!~@'\.\*]/gi, "");
        } else if (target.name === "user_message") {
            target.value = target.value.replace(/[^А-Яа-я 0-9 \-\.\,\!\?\:\;\"]/gi, "");
        }
    });
    document.addEventListener('blur', event => {
        if (event.target.tagName === 'INPUT' && event.target.value != 0) {
            event.target.value = event.target.value.replace(/^[\s-]+/, '');
            event.target.value = event.target.value.replace(/[\s-]+$/, '');
            event.target.value = event.target.value.replace(/-+/g, '-');
            event.target.value = event.target.value.replace(/\s+/g, ' ');
            if (event.target.name === "user_name") {
                event.target.value = event.target.value.split(' ').map(elem => elem[0].toUpperCase() + elem.toLowerCase().substring(1)).join(' ');
            } else if (event.target.name === "user_email") {
                const emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z-]+\.[a-zA-Z]{2,3}$/);
                if (!emailPattern.test(event.target.value)) {
                    event.target.value = '';
                    alert('Введите корректный email');
                }
            } else if (event.target.name === "user_phone") {
                const phonePattern1 = new RegExp(/^\+7\d{10}$/);
                const phonePattern2 = new RegExp(/^[78]{1}\d{10}$/);
                if (!phonePattern1.test(event.target.value) && !phonePattern2.test(event.target.value)) {
                    event.target.value = '';
                    alert('Введите корректный номер телефона');
                }
            }
        }
    }, true);
};
export default check;