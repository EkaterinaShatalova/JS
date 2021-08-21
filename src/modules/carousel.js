const carousel = () => {
    const servicesElements = document.querySelector('.services-elements')
    const image = servicesElements.querySelectorAll('.element');
    const arrows = document.querySelector('.services-arrow')
    const servicesCarousel = document.querySelector('.services-carousel')
    const col = document.querySelector('.col');
    let firstSlide = 0;
    let mediumSlide = 1;
    let lastSlide = 2;
    const addClass = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
    const removeClass = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

    if (!window.matchMedia('(max-width: 992px)').matches) {
      removeClass(image, 1, 'item-none');
      removeClass(image, 2, 'item-none');
      col.classList.remove('col-sm-12');
      col.classList.remove('col-md-4');
      col.classList.add('col-sm-6');
      col.classList.add('col-md-4');
    } else {
      addClass(image, 1, 'item-none');
      addClass(image, 2, 'item-none');
    }
    window.addEventListener('resize', () => {
        if (!(window.matchMedia('(max-width: 992px)').matches)) {
        removeClass(image, 1, 'item-none');
        removeClass(image, 2, 'item-none');
        col.classList.remove('col-sm-12');
        col.classList.remove('col-md-4');
        col.classList.add('col-sm-6');
        col.classList.add('col-md-4');
        } else {
            addClass(image, 1, 'item-none');
            addClass(image, 2, 'item-none');
            col.classList.remove('col-sm-6');
            col.classList.remove('col-md-4');
            col.classList.add('col-sm-12');
            col.classList.add('col-md-4');
        }
    });
    
    arrows.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;
            if(window.matchMedia('(max-width: 992px)').matches) {
              if (target.matches('.arrow-right')) {
                removeClass(image, firstSlide, 'show');
                if (firstSlide === image.length - 1) {
                    firstSlide = 0;
                } else {
                    firstSlide++;
                }
                addClass(image, firstSlide, 'show');
            } else if (target.matches('.arrow-left')) {
              removeClass(image, firstSlide, 'show');
                if (firstSlide === 0) {
                    firstSlide = image.length - 1;
                } else {
                    firstSlide--;
                }
                addClass(image, firstSlide, 'show');
          } servicesCarousel.textContent = '';
              servicesCarousel.innerHTML = `
                <div class="col-sm-12">
                  <div class="element relative">
                <a
                  class="absolute fancyboxModal"
                  href="#application"
                  data-application= ${image[firstSlide].firstElementChild.dataset.application}
                ></a>
                <div class="img-wrapper">
                  <img src="${image[firstSlide].children[1].firstElementChild.src}"/>
                </div>
                <div class="element-content">
                  <div class="title-h5 upper">${image[firstSlide].children[2].firstElementChild.innerText}</div>
                  <div class="element-price">${image[firstSlide].children[2].firstElementChild.nextElementSibling.innerText}</div>
                  <div class="text">
                    ${image[firstSlide].children[2].lastElementChild.innerText}
                  </div>
                </div>
              </div>
                </div>`
        }
          else {
            let map = new Map();
            map.set(0, firstSlide)
            map.set(1, mediumSlide)
            map.set(2, lastSlide)
            if (target.matches('.arrow-right')) {
                addClass(image, firstSlide, 'show');
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
                removeClass(image, lastSlide, 'show');
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
                addClass(image, lastSlide, 'show');
                removeClass(image, firstSlide, 'show');
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
    `}

})
};

export default carousel;