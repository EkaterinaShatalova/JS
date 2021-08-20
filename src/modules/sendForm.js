const sendForm = () => {
    const errorMessage = 'Произошла ошибка отправки';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    document.addEventListener('submit', event => {
        event.preventDefault();
        event.target.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(event.target);
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        event.target.reset();
        const postData = body => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };
        postData(body)
            .then(response => {
                if (response.status !== 200) throw new Error('status network not 200!');
                statusMessage.textContent = successMessage;
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            })
            .finally(() => {
                setTimeout(() => statusMessage.textContent = '', 9000);
            });
    });
};

export default sendForm;