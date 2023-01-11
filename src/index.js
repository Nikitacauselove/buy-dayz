const limitHeight = document.querySelector(".header-background-container").offsetHeight;
const pageElements = {
    buyingOptions: document.querySelector(".offer-buy"),
    buyingOptionsLink: document.querySelector(".offer-article__link"),
    logo: document.querySelector(".nav__logo"),
    modal: document.querySelector(".offer__modal-container"),
    modalLinks: document.querySelectorAll(".modal-article-platform__link"),
    modalPictures: document.querySelectorAll(".modal__picture"),
    modalTitle: document.querySelector(".modal-article__title"),
    nav: document.querySelector(".nav"),
    offer: document.querySelector(".offer")
};


/** Отображение/сокрытие логотипа. */

document.addEventListener("scroll", showLogo);

function showLogo() {
    if (document.documentElement.scrollTop > limitHeight) {
        pageElements.logo.classList.add("nav__logo_show");
    } else {
        pageElements.logo.classList.remove("nav__logo_show");
    }
}


/** Отображение/сокрытие боковой навигации. */

pageElements.nav.addEventListener("click", showSideNav);
window.addEventListener("resize", widthChange);

function showSideNav(event) {
    if (event.target.closest(".nav__toggle-button")) {
        document.body.classList.toggle("open-nav");
    } else {
        if (event.target.closest(".nav__close-button")) {
            document.body.classList.remove("open-nav");
        }
    }
}
function widthChange() {
    if (document.body.classList.contains("open-nav") && document.body.clientWidth > 991) {
        document.body.classList.remove("open-nav");
    }
}


/** Прокрутка при нажатии на ссылку. */

pageElements.buyingOptionsLink.addEventListener("click", scroll);

function scroll(event) {
    event.preventDefault();
    window.scrollBy({behavior: "smooth", top: pageElements.buyingOptions.getBoundingClientRect()["top"] - 80});
}


/** Отображение/сокрытие модального окна. */

let lastPicture = undefined;

pageElements.offer.addEventListener("click", showOrHideModal);

function showOrHideModal(event) {
    if (event.target.classList.contains("offer-buy-article__button") || event.target.classList.contains("offer-buy__img")) {
        modalConstructor(event);
        pageElements.modal.classList.add("offer__modal-container_display");
        document.documentElement.style.overflow = "hidden";
    } else if (event.target.closest(".modal__close-button") || event.target.classList.contains("offer__modal-mask")) {
        pageElements.modal.classList.remove("offer__modal-container_display");
        document.documentElement.style.overflow = "";
    }
}
function modalConstructor(event) {
    let product = event.target.getAttribute("data-product");
    if (lastPicture !== undefined) {
        lastPicture.classList.remove("modal__picture_display");
    }
    switch (product) {
        case "DayZ":
            lastPicture = pageElements.modalPictures[0];
            pageElements.modalPictures[0].classList.add("modal__picture_display");
            pageElements.modalTitle.textContent = "Купить DayZ";
            pageElements.modalLinks[0].href = "https://store.steampowered.com/app/221100/DayZ/";
            pageElements.modalLinks[1].href = "https://www.microsoft.com/store/apps/BSR9NLHVF1KL";
            pageElements.modalLinks[2].href = "https://store.playstation.com/product/EP2601-CUSA05645_00-DAYZ000000000001";
            break;
        case "DayZ Livonia":
            lastPicture = pageElements.modalPictures[1];
            pageElements.modalPictures[1].classList.add("modal__picture_display");
            pageElements.modalTitle.textContent = "Купить DayZ Livonia";
            pageElements.modalLinks[0].href = "https://store.steampowered.com/app/1151700";
            pageElements.modalLinks[1].href = "https://www.microsoft.com/store/productid/9nrwmzz3h1ct";
            pageElements.modalLinks[2].href = "https://store.playstation.com/product/EP2601-CUSA05645_00-DAYZDLC000000001";
            break;
        case "DayZ Livonia Edition":
            lastPicture = pageElements.modalPictures[2];
            pageElements.modalPictures[2].classList.add("modal__picture_display");
            pageElements.modalTitle.textContent = "Купить DayZ Livonia Edition";
            pageElements.modalLinks[0].href = "https://store.steampowered.com/bundle/12620";
            pageElements.modalLinks[1].href = "https://www.microsoft.com/store/productid/9pbkvh4mh33g";
            pageElements.modalLinks[2].href = "https://store.playstation.com/product/EP2601-CUSA05645_00-DAYZBUNDLE000001";
            break;
    }
}