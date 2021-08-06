const command =  () => {
    const command = document.querySelectorAll('.command__photo');
    let photo;
    command.forEach(item => {
        item.addEventListener('mouseover', event => {
            photo = event.target.src;
            event.target.src = event.target.dataset.img;
        });
        item.addEventListener('mouseout', event => {
            event.target.src = photo;
        });
    });
};
export default command;