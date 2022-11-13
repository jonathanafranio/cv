//*** Da linha 4 ate a linha 7 faz o evento de clique
//*** ...do botao do menu hambuguer .vs-open
//*** ...para abrir o menu
const btnHambuger = document.querySelector('#nav-mobile-btn');
btnHambuger.addEventListener("click", function () {
    document.querySelector('body').classList.add('-is-menu-open');
});

//*** Da linha 12 ate a linha 16 faz o evento de clique
//*** ...do botao do menu hambuguer .vs-open
//*** ...para fechar o menu
const closeMenuBtnHam = document.querySelector('.menu-nav-mobile__btn-close');
closeMenuBtnHam.addEventListener("click", function () {
    document.querySelector('body').classList.remove('-is-menu-open');
});


//*** Da linha 34 ate a linha 45 faz o evento de clique
//*** ...do botao do menu hambuguer .vs-open
//*** ...para fechar o menu
const btnDropDown = document.querySelectorAll('.dropdown');
for (c of btnDropDown) {
    c.addEventListener("click", function () {
        if (this.classList.contains("-is-active")) {
            this.classList.remove("-is-active");
            this.parentNode.querySelector(".dropdown-content").classList.remove('-is-active');
        } else {
            this.classList.add("-is-active");
            this.parentNode.querySelector(".dropdown-content").classList.add('-is-active');
        }
    })
}


let menuLinks = document.querySelectorAll('.menu-item');
if (menuLinks) {
    menuLinks.forEach(item => {
        var childA = item.querySelector('a');
        childA.addEventListener('click', function (event) {
            event.preventDefault();
            var attrHref = this.getAttribute('href');
            if (attrHref.indexOf('#') > -1) {
                document.querySelector(attrHref).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                window.location.href = attrHref;
            }
        });
    });
}

document.querySelector('#to-up').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('body').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
