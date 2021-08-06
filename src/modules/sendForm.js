const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    document.addEventListener('submit', event => {
        event.preventDefault();
        event.target.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(event.target);
        event.target.reset();
        const postData = formData => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            });
        };
        postData(formData)
        .then(response => {
            if (response.status !== 200) throw new Error('status network not 200!');
            statusMessage.textContent = successMessage;
        })
        .catch(error => {
            statusMessage.textContent = errorMessage;
            console.error(error);
            });
    });
};
export default sendForm;