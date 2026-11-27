
// HEADER
function setupHeaderMenu() {
	const button = document.querySelector('.header__menu-toggle');
	const menu = document.querySelector('.header__nav');

	if (!button || !menu) {
		return;
	}

	function setMenuOpen(isOpen) {
		menu.classList.toggle('header__nav--open', isOpen);
		button.setAttribute('aria-expanded', String(isOpen));
		button.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
	}

	button.addEventListener('click', function () {
		setMenuOpen(button.getAttribute('aria-expanded') !== 'true');
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
			setMenuOpen(false);
			button.focus();
		}
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth >= 1024) {
			setMenuOpen(false);
		}
	});
}

setupHeaderMenu();
