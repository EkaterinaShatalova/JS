(()=>{"use strict";var e,t,n,a,l,i,c,s,r,o,d,u,v,m,p,f;m=document.querySelector(".accordeon"),p=m.querySelectorAll(".element"),f=m.querySelectorAll(".element-content"),p.forEach((function(e,t){e.addEventListener("click",(function(){e.classList.contains("active")?(p.forEach((function(e){e.classList.remove("active")})),f.forEach((function(e){e.style.display="none"}))):(p.forEach((function(e){e.classList.remove("active")})),f.forEach((function(e){e.style.display="none"})),e.classList.add("active"),f[t].style.display="block")}))})),i=document.querySelector(".services-elements").querySelectorAll(".element"),c=document.querySelector(".services-arrow"),s=document.querySelector(".services-carousel"),r=0,o=1,d=2,u=function(e,t,n){e[t].classList.add(n)},v=function(e,t,n){e[t].classList.remove(n)},c.addEventListener("click",(function(e){e.preventDefault();var t=e.target,n=new Map;n.set(0,r),n.set(1,o),n.set(2,d),t.matches(".arrow-right")?(u(i,r,"show"),d===i.length-1?d=0:d++,o===i.length-1?o=0:o++,r===i.length-1?r=0:r++,v(i,d,"show"),n.set(0,r),n.set(1,o),n.set(2,d)):t.matches(".arrow-left")&&(0===r?r=i.length-1:r--,0===o?o=i.length-1:o--,u(i,d,"show"),v(i,r,"show"),0===d?d=i.length-1:d--,n.set(0,r),n.set(1,o),n.set(2,d)),s.innerHTML='\n                <div class="col-sm-6 col-md-4">\n                  <div class="element relative">\n                <a\n                  class="absolute fancyboxModal"\n                  href="#application"\n                  data-application= '.concat(i[n.get(0)].firstElementChild.dataset.application,'\n                ></a>\n                <div class="img-wrapper">\n                  <img src="').concat(i[n.get(0)].children[1].firstElementChild.src,'"/>\n                </div>\n                <div class="element-content">\n                  <div class="title-h5 upper">').concat(i[n.get(0)].children[2].firstElementChild.innerText,'</div>\n                  <div class="element-price">').concat(i[n.get(0)].children[2].firstElementChild.nextElementSibling.innerText,'</div>\n                  <div class="text">\n                    ').concat(i[n.get(0)].children[2].lastElementChild.innerText,'\n                  </div>\n                </div>\n              </div>\n                </div>\n\n                <div class="col-sm-6 col-md-4">\n                <div class="element relative">\n                <a\n                  class="absolute fancyboxModal"\n                  href="#application"\n                  data-application= ').concat(i[n.get(1)].firstElementChild.dataset.application,'\n                ></a>\n                <div class="img-wrapper">\n                  <img src="').concat(i[n.get(1)].children[1].firstElementChild.src,'" />\n                </div>\n                <div class="element-content">\n                  <div class="title-h5 upper">').concat(i[n.get(1)].children[2].firstElementChild.innerText,'</div>\n                  <div class="element-price">').concat(i[n.get(1)].children[2].firstElementChild.nextElementSibling.innerText,'</div>\n                  <div class="text">\n                    ').concat(i[n.get(1)].children[2].lastElementChild.innerText,'\n                  </div>\n                </div>\n              </div>\n               </div>\n\n                <div class="col-sm-6 col-md-4">\n                <div class="element relative">\n                <a\n                  class="absolute fancyboxModal"\n                  href="#application"\n                  data-application= ').concat(i[n.get(2)].firstElementChild.dataset.application,'\n                ></a>\n                <div class="img-wrapper">\n                  <img src="').concat(i[n.get(2)].children[1].firstElementChild.src,'" />\n                </div>\n                <div class="element-content">\n                  <div class="title-h5 upper">').concat(i[n.get(2)].children[2].firstElementChild.innerText,'</div>\n                  <div class="element-price">').concat(i[n.get(2)].children[2].firstElementChild.nextElementSibling.innerText,'</div>\n                  <div class="text">\n                    ').concat(i[n.get(2)].children[2].lastElementChild.innerText,"\n                  </div>\n                </div>\n              </div>\n               </div>\n    ")})),t=document.querySelector(".modal-callback"),n=document.querySelector(".modal-overlay"),a=document.querySelector(".up"),l=document.querySelector(".title-h2"),document.addEventListener("click",(function(e){var a=e.target;if("A"===a.tagName&&"LI"===a.parentNode.tagName){var l=a.getAttribute("href");e.preventDefault(),document.querySelector(l).scrollIntoView({behavior:"smooth",block:"start"})}else a.classList.contains("callback-btn")||a.classList.contains("button-services")||a.classList.contains("absolute")?(e.preventDefault(),t.style.display="block",n.style.display="block"):(a.parentElement.classList.contains("modal-close")||a===n)&&(e.preventDefault(),t.style.display="none",n.style.display="none")})),a.addEventListener("click",(function(e){e.preventDefault(),document.querySelector("body").scrollIntoView({behavior:"smooth",block:"start"})})),document.addEventListener("scroll",(function(){pageYOffset>l.getBoundingClientRect().bottom?a.style.display="block":a.style.display="none"})),function(){var e=document.querySelector(".top-slider").querySelectorAll(".item"),t=document.querySelectorAll(".table"),n=0;t[0].classList.add("active");var a=function(e,t,n){e[t].classList.remove(n)},l=function(e,t,n){e[t].classList.add(n)},i=function(){l(e,n,"item-none"),a(t,n,"active"),++n>=e.length&&(n=0),a(e,n,"item-none"),l(t,n,"active")};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(i,e)}(3e3)}(),document.addEventListener("input",(function(e){var t=e.target;"fio"===t.name?t.value=t.value.replace(/[^А-Яа-я ]/gi,""):"tel"===t.name&&(t.value=t.value.replace(/[^0-9+]/,""))})),document.addEventListener("blur",(function(e){"INPUT"===e.target.tagName&&0!=e.target.value&&(e.target.value=e.target.value.replace(/^[\s-]+/,""),e.target.value=e.target.value.replace(/[\s-]+$/,""),e.target.value=e.target.value.replace(/-+/g,"-"),e.target.value=e.target.value.replace(/\s+/g," "),"fio"===e.target.name?e.target.value=e.target.value.split(" ").map((function(e){return e[0].toUpperCase()+e.toLowerCase().substring(1)})).join(" "):"tel"===e.target.name&&(new RegExp(/^\+7\d{10}$/).test(e.target.value)||(e.target.value="",alert("Введите корректный номер телефона"))))}),!0),(e=document.createElement("div")).style.cssText="font-size: 2rem",document.addEventListener("submit",(function(t){t.preventDefault(),t.target.appendChild(e),e.textContent="Загрузка...";var n=new FormData(t.target),a={};n.forEach((function(e,t){a[t]=e})),t.target.reset(),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(a).then((function(t){if(200!==t.status)throw new Error("status network not 200!");e.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(t){e.textContent="Произошла ошибка отправки",console.error(t)})).finally((function(){setTimeout((function(){return e.textContent=""}),9e3)}))}))})();