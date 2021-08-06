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
            const emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z-]+\.[a-zA-Z]{2,3}$/);
            if (!emailPattern.test(event.target.value)) {
                event.target.value = '';
                alert('Введите корректный email');
            }
        } else if (target.name === "user_message") {
            target.value = target.value.replace(/[^А-Яа-я 0-9 \-\.\,\!\?\:\;\"]/gi, "");
        }
    });
    document.addEventListener('blur', event => {
        event.target.value  = event.target.value.replace(/^[\s-]+/, '');
        event.target.value  = event.target.value.replace(/[\s-]+$/, '');
        event.target.value  = event.target.value.replace(/-+/g, '-');
        event.target.value  = event.target.value.replace(/\s+/g, ' ');
        if (event.target.name === "user_name") {
            event.target.value = event.target.value.split(' ').map(elem => elem[0].toUpperCase() + elem.toLowerCase().substring(1)).join(' ');
        }
    }, true);
};
export default check;