// Constants
const ACTIVE_NAVBAR_CLASS: string = 'active';

const HIDDEN_CLASS = '__hidden';
const SHOW__CLASS: string = '__show';

const LIGHT__CLASS: string = '__light';
const DARK__CLASS: string = '__dark';

/**
 * Change Navbar Background
 */

const navbar = document.getElementById('navbar') as HTMLDivElement;

window.onscroll = function () {
	if (window.scrollY > 0) {
		navbar?.classList.add(ACTIVE_NAVBAR_CLASS);
	} else {
		navbar?.classList.remove(ACTIVE_NAVBAR_CLASS);
	}
};

/**
 * Change Page Theme
 */
const toggleThemeButtons = document.querySelectorAll(
	'.toggle-theme'
) as NodeListOf<HTMLButtonElement>;

toggleThemeButtons?.length &&
	toggleThemeButtons.forEach((button) => {
		button?.addEventListener('click', () => {
			// Update Icon
			toggleThemeButtons.forEach((btn) =>
				(btn.querySelectorAll('i') as NodeListOf<HTMLElement>)?.forEach(
					(icon) => icon.classList.toggle(HIDDEN_CLASS)
				)
			);

			// Updated Theme
			document.body.classList.toggle(LIGHT__CLASS);
			document.body.classList.toggle(DARK__CLASS);
		});
	});

/**
 * Toggle Menu
 */
const toggleNavbarMenuButton = document.getElementById(
	'toggle-menu'
) as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;

toggleNavbarMenuButton?.addEventListener('click', () => {
	navbarMenu?.classList.toggle(SHOW__CLASS);

	(
		toggleNavbarMenuButton?.querySelectorAll('i') as NodeListOf<HTMLElement>
	)?.forEach((icon) => icon.classList.toggle(HIDDEN_CLASS));
});

/**
 * Products Slider
 */
const productItemsBox = document.querySelector(
	'.product-items'
) as HTMLDivElement;

let isMouseDown: boolean = false;
let startX: number;
let scrollLeft: number;

productItemsBox.addEventListener('mousedown', (e: MouseEvent) => {
	isMouseDown = true;
	startX = e.pageX - productItemsBox.offsetLeft;
	scrollLeft = productItemsBox.scrollLeft;

	productItemsBox.style.cursor = 'grabbing';
});

productItemsBox.addEventListener('mouseleave', () => {
	isMouseDown = false;
	productItemsBox.style.cursor = 'grab';
});

productItemsBox.addEventListener('mouseup', () => {
	isMouseDown = false;
	productItemsBox.style.cursor = 'grab';
});

productItemsBox.addEventListener('mousemove', (e: MouseEvent) => {
	if (!isMouseDown) return;

	e.preventDefault();

	const x: number = e.pageX - productItemsBox.offsetLeft;
	const walk: number = (x - startX) * 2;

	productItemsBox.scrollLeft = scrollLeft - walk;
});
