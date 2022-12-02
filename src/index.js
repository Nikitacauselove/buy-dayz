/*                  Отображение/сокрытие логотипа                  */

const logo = document.getElementsByClassName("nav__logo")[0];
const limitHeight = heightCalculating();

window.onscroll = logoShow;


function heightCalculating () {
    return document.getElementsByClassName("header-background-container")[0].offsetHeight;
}
function logoShow () {
    if (document.documentElement.scrollTop > limitHeight) {
        logo.classList.add("nav__logo_show");
    } else {
        logo.classList.remove("nav__logo_show");
    }
}


/*                  Отображение/сокрытие боковой навигации                  */

const nav = document.getElementsByClassName("nav")[0];

nav.addEventListener("click", sideNavShow);
window.onresize = widthChange;


function sideNavShow (event) {
    if (event.target.closest(".nav__toggle-button")) {
        document.body.classList.toggle("open-nav");
    } else {
        if (event.target.closest(".nav__close-button")) {
            document.body.classList.remove("open-nav");
        }
    }
}
function widthChange () {
    if (document.body.classList.contains("open-nav") && document.body.clientWidth > 991) {
        document.body.classList.remove("open-nav");
    }
}


/*                  Scroll при нажатии на ссылку                  */

const seeBuyingOptions = document.getElementsByClassName("offer-article__link")[0];
const elementToScroll = document.getElementsByClassName("offer-buy")[0];

seeBuyingOptions.addEventListener("click", scroll);


function scroll(event) {
    event.preventDefault();
    window.scrollBy({top: elementToScroll.getBoundingClientRect()["top"]-80, behavior: "smooth"});
}


/*                  Отображение/сокрытие модального окна                  */

const modal = document.getElementsByClassName("offer__modal-container")[0];
const offer = document.getElementsByClassName("offer")[0];
const modalPictures = document.getElementsByClassName("modal__picture");
let lastPicture = undefined;
const modalTitle = document.getElementsByClassName("modal-article__title")[0];
const modalLinks = document.getElementsByClassName("modal-article-platform__link");

offer.addEventListener("click", displayModal);


function displayModal (event) {
    if (event.target.classList.contains("offer-buy-article__button") || event.target.classList.contains("offer-buy__img")) {
        modalConstructor(event);
        modal.classList.add("offer__modal-container_display");
        document.documentElement.style.overflow = "hidden";
    } else {
        if (event.target.closest(".modal__close-button") || event.target.classList.contains("offer__modal-mask")) {
            modal.classList.remove("offer__modal-container_display");
            document.documentElement.style.overflow = "";
        }
    }
}
function modalConstructor (event) {
    let product = event.target.getAttribute("data-product");
    if (lastPicture !== undefined) {
        lastPicture.classList.remove("modal__picture_display");
    }
    switch (product) {
        case "DayZ":
            lastPicture = modalPictures[0];
            modalPictures[0].classList.add("modal__picture_display");
            modalTitle.textContent = "Купить DayZ";
            modalLinks[0].href = "https://store.steampowered.com/app/221100/DayZ/";
            modalLinks[1].href = "https://www.microsoft.com/store/apps/BSR9NLHVF1KL";
            modalLinks[2].href = "https://store.sonyentertainmentnetwork.com/#!/cid=EP2601-CUSA05645_00-DAYZ000000000001";
            break;
        case "DayZ Livonia":
            lastPicture = modalPictures[1];
            modalPictures[1].classList.add("modal__picture_display");
            modalTitle.textContent = "Купить DayZ Livonia";
            modalLinks[0].href = "https://store.steampowered.com/app/1151700";
            modalLinks[1].href = "https://www.microsoft.com/store/productid/9nrwmzz3h1ct";
            modalLinks[2].href = "https://store.sonyentertainmentnetwork.com/#!/cid=EP2601-CUSA05645_00-DAYZDLC000000001";
            break;
        case "DayZ Livonia Edition":
            lastPicture = modalPictures[2];
            modalPictures[2].classList.add("modal__picture_display");
            modalTitle.textContent = "Купить DayZ Livonia Edition";
            modalLinks[0].href = "https://store.steampowered.com/bundle/12620";
            modalLinks[1].href = "https://www.microsoft.com/store/productid/9pbkvh4mh33g";
            modalLinks[2].href = "https://store.sonyentertainmentnetwork.com/#!/cid=EP2601-CUSA05645_00-DAYZBUNDLE000001";
            break;
    }
}














