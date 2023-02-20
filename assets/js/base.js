window.onload = function() {
    base.init();
};

const base = {
	init: function () {
		base.menu.suavizarScroll();
    },
    
    menu: {
		suavizarScroll: function () {
            const menuItems = document.querySelectorAll('.box-header__menu a[href^="#"]');
            menuItems.forEach(item => {
                item.addEventListener('click', base.menu.rolarAoConteudo);
            });
        },

        obterDistancia: function (element) {
            const id = element.getAttribute('href');
	        return document.querySelector(id).offsetTop;
        },

        rolarParaPosicao: function (to) {
            window.scroll({
                top: to,
                behavior: "smooth",
            })
        },

        rolarAoConteudo: function (event) {
            event.preventDefault();
            const to = base.menu.obterDistancia(event.currentTarget) - 121;
            base.menu.rolarParaPosicao(to);
        },

	}
}