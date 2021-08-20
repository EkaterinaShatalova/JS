const carousel = () => {
    const servicesElements = document.querySelector('.services-elements')
    const image = servicesElements.querySelectorAll('.element');
    const arrows = document.querySelector('.services-arrow')
    const servicesCarousel = document.querySelector('.services-carousel')
    let firstSlide = 0;
    let mediumSlide = 1;
    let lastSlide = 2;
    const addShow = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
    const removeShow = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
    arrows.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;
            let map = new Map();
            map.set(0, firstSlide)
            map.set(1, mediumSlide)
            map.set(2, lastSlide)
            if (target.matches('.arrow-right')) {
                addShow(image, firstSlide, 'show');
                if (lastSlide === image.length - 1) {
                    lastSlide = 0;
                } else {
                    lastSlide++;
                }
                if (mediumSlide === image.length - 1) {
                    mediumSlide = 0;
                } else {
                    mediumSlide++;
                }
                if (firstSlide === image.length - 1) {
                    firstSlide = 0;
                } else {
                    firstSlide++;
                }
                removeShow(image, lastSlide, 'show');
                map.set(0, firstSlide)
                map.set(1, mediumSlide)
                map.set(2, lastSlide)
            } else if (target.matches('.arrow-left')) {
                if (firstSlide === 0) {
                    firstSlide = image.length - 1;
                } else {
                    firstSlide--;
                }
                if (mediumSlide === 0) {
                    mediumSlide = image.length - 1;
                } else {
                    mediumSlide--;
                }
                addShow(image, lastSlide, 'show');
                removeShow(image, firstSlide, 'show');
                if (lastSlide === 0) {
                    lastSlide = image.length - 1;
                } else {
                    lastSlide--;
                }
                map.set(0, firstSlide)
                map.set(1, mediumSlide)
                map.set(2, lastSlide)}
    servicesCarousel.innerHTML = `
                <div class="col-sm-6 col-md-4">
                  <div class="element relative">
                <a
                  class="absolute fancyboxModal"
                  href="#application"
                  data-application= ${image[map.get(0)].firstElementChild.dataset.application}
                ></a>
                <div class="img-wrapper">
                  <img src="${image[map.get(0)].children[1].firstElementChild.src}"/>
                </div>
                <div class="element-content">
                  <div class="title-h5 upper">${image[map.get(0)].children[2].firstElementChild.innerText}</div>
                  <div class="element-price">${image[map.get(0)].children[2].firstElementChild.nextElementSibling.innerText}</div>
                  <div class="text">
                    ${image[map.get(0)].children[2].lastElementChild.innerText}
                  </div>
                </div>
              </div>
                </div>

                <div class="col-sm-6 col-md-4">
                <div class="element relative">
                <a
                  class="absolute fancyboxModal"
                  href="#application"
                  data-application= ${image[map.get(1)].firstElementChild.dataset.application}
                ></a>
                <div class="img-wrapper">
                  <img src="${image[map.get(1)].children[1].firstElementChild.src}" />
                </div>
                <div class="element-content">
                  <div class="title-h5 upper">${image[map.get(1)].children[2].firstElementChild.innerText}</div>
                  <div class="element-price">${image[map.get(1)].children[2].firstElementChild.nextElementSibling.innerText}</div>
                  <div class="text">
                    ${image[map.get(1)].children[2].lastElementChild.innerText}
                  </div>
                </div>
              </div>
               </div>

                <div class="col-sm-6 col-md-4">
                <div class="element relative">
                <a
                  class="absolute fancyboxModal"
                  href="#application"
                  data-application= ${image[map.get(2)].firstElementChild.dataset.application}
                ></a>
                <div class="img-wrapper">
                  <img src="${image[map.get(2)].children[1].firstElementChild.src}" />
                </div>
                <div class="element-content">
                  <div class="title-h5 upper">${image[map.get(2)].children[2].firstElementChild.innerText}</div>
                  <div class="element-price">${image[map.get(2)].children[2].firstElementChild.nextElementSibling.innerText}</div>
                  <div class="text">
                    ${image[map.get(2)].children[2].lastElementChild.innerText}
                  </div>
                </div>
              </div>
               </div>
    `
})
};

export default carousel;