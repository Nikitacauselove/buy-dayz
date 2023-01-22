const headerHeight: number = document.querySelector<HTMLElement>(".header-background-container")!.offsetHeight;
const pageElements = {
    buyingOptions: document.querySelector<HTMLElement>(".offer-buy"),
    buyingOptionsLink: document.querySelector<HTMLElement>(".offer-article__link"),
    logo: document.querySelector<HTMLElement>(".nav__logo"),
    modal: document.querySelector<HTMLElement>(".offer__modal-container"),
    modalImages: document.querySelectorAll<HTMLElement>(".modal__img"),
    modalLinks: document.querySelectorAll<HTMLAnchorElement>(".modal-article-platform__link"),
    modalTitle: document.querySelector<HTMLElement>(".modal-article__title"),
    nav: document.querySelector<HTMLElement>(".nav"),
    offer: document.querySelector<HTMLElement>(".offer")
};


/** Отображение/сокрытие логотипа. */

document.addEventListener("scroll", showLogo);

function showLogo(): void {
    if (headerHeight < document.documentElement.scrollTop) {
        pageElements.logo!.classList.add("nav__logo_show");
    } else {
        pageElements.logo!.classList.remove("nav__logo_show");
    }
}


/** Отображение/сокрытие боковой навигации. */

pageElements.nav!.addEventListener("click", showSideNavigation);
window.addEventListener("resize", hideSideNavigation);

function showSideNavigation(event: Event): void {
    if ((event.target as HTMLElement).closest(".nav__toggle-button")) {
        document.body.classList.toggle("open-nav");
    } else if ((event.target as HTMLElement).closest(".nav__close-button")) {
        document.body.classList.remove("open-nav");
    }
}
function hideSideNavigation(): void {
    if (document.body.classList.contains("open-nav") && window.matchMedia('(min-width: 992px)').matches) {
        document.body.classList.remove("open-nav");
    }
}


/** Прокрутка при нажатии на ссылку. */

pageElements.buyingOptionsLink!.addEventListener("click", scrollToBuyingOptions);

function scrollToBuyingOptions(event: Event): void {
    event.preventDefault();
    window.scrollBy({behavior: "smooth", top: pageElements.buyingOptions!.getBoundingClientRect().top - 80});
}


/** Отображение/сокрытие модального окна. */

let lastDisplayedModalImage: HTMLElement = pageElements.modalImages[0];

pageElements.offer!.addEventListener("click", showOrHideModal);

function showOrHideModal(event: Event): void {
    if ((event.target as HTMLElement).classList.contains("offer-buy-article__button") || (event.target as HTMLElement).classList.contains("offer-buy__img")) {
        buildModal(event.target as HTMLElement);
        pageElements.modal!.classList.add("offer__modal-container_display");
        document.documentElement.setAttribute("style", "overflow: hidden");
    } else if ((event.target as HTMLElement).closest(".modal__close-button") || (event.target as HTMLElement).classList.contains("offer__modal-mask")) {
        pageElements.modal!.classList.remove("offer__modal-container_display");
        document.documentElement.removeAttribute("style");
    }
}
function buildModal(target: HTMLElement): void {
    const product: string | null = target.getAttribute("data-product");

    lastDisplayedModalImage.classList.remove("modal__img_display");
    switch (product) {
        case "DayZ":
            lastDisplayedModalImage = pageElements.modalImages[0];
            pageElements.modalImages[0].classList.add("modal__img_display");
            pageElements.modalTitle!.textContent = "Купить DayZ";
            pageElements.modalLinks[0].href = "https://store.steampowered.com/app/221100/DayZ/";
            pageElements.modalLinks[1].href = "https://www.microsoft.com/store/apps/BSR9NLHVF1KL";
            pageElements.modalLinks[2].href = "https://store.playstation.com/product/EP2601-CUSA05645_00-DAYZ000000000001";
            break;
        case "DayZ Livonia":
            lastDisplayedModalImage = pageElements.modalImages[1];
            pageElements.modalImages[1].classList.add("modal__img_display");
            pageElements.modalTitle!.textContent = "Купить DayZ Livonia";
            pageElements.modalLinks[0].href = "https://store.steampowered.com/app/1151700";
            pageElements.modalLinks[1].href = "https://www.microsoft.com/store/productid/9nrwmzz3h1ct";
            pageElements.modalLinks[2].href = "https://store.playstation.com/product/EP2601-CUSA05645_00-DAYZDLC000000001";
            break;
        case "DayZ Livonia Edition":
            lastDisplayedModalImage = pageElements.modalImages[2];
            pageElements.modalImages[2].classList.add("modal__img_display");
            pageElements.modalTitle!.textContent = "Купить DayZ Livonia Edition";
            pageElements.modalLinks[0].href = "https://store.steampowered.com/bundle/12620";
            pageElements.modalLinks[1].href = "https://www.microsoft.com/store/productid/9pbkvh4mh33g";
            pageElements.modalLinks[2].href = "https://store.playstation.com/product/EP2601-CUSA05645_00-DAYZBUNDLE000001";
            break;
    }
}