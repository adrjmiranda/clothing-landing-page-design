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

const navbarMenuLinks = document.querySelectorAll(
	'.navbar-link'
) as NodeListOf<HTMLAnchorElement>;

const toggleMenu = (): void => {
	navbarMenu?.classList.toggle(SHOW__CLASS);

	(
		toggleNavbarMenuButton?.querySelectorAll('i') as NodeListOf<HTMLElement>
	)?.forEach((icon) => icon.classList.toggle(HIDDEN_CLASS));
};

toggleNavbarMenuButton?.addEventListener('click', () => {
	toggleMenu();
});

navbarMenuLinks?.length &&
	navbarMenuLinks.forEach((link) =>
		link.addEventListener('click', () => {
			toggleMenu();
		})
	);

/**
 * Products Slider
 */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	loopAddBlankSlides: false,

	modules: [Navigation],

	slidesPerView: 1,
	spaceBetween: 0,

	breakpoints: {
		768: {
			slidesPerView: 3,
			spaceBetween: '2%',
		},
		576: {
			slidesPerView: 2,
			spaceBetween: '2%',
		},
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

document
	.querySelector('.swiper-button-prev')
	.classList.add('ri-arrow-left-line');
document
	.querySelector('.swiper-button-next')
	.classList.add('ri-arrow-right-line');

/**
 * Scroll Reveal Animation
 */
import ScrollReveal from 'scrollreveal';

// Home
ScrollReveal().reveal('.home-text', {
	opacity: 0,
	origin: 'top',
	distance: '30%',
	duration: 1750,
	delay: 250,
	easing: 'ease-in-out',
	mobile: true,
	reset: true,
});

ScrollReveal().reveal('.home-img', {
	opacity: 0,
	origin: 'bottom',
	distance: '30%',
	duration: 1750,
	delay: 250,
	easing: 'ease-in-out',
	mobile: true,
	reset: true,
});

// News
const newItemsNumber: number =
	(document.querySelectorAll('.new-card') as NodeListOf<HTMLDivElement>)
		?.length ?? 0;

for (let i = 0; i < newItemsNumber; i++) {
	ScrollReveal().reveal(`.new-card:nth-child(${i + 1})`, {
		opacity: 0,
		origin: 'bottom',
		distance: '5%',
		duration: 1750,
		delay: 250 * (i + 1),
		easing: 'ease-in-out',
		mobile: true,
		reset: true,
	});
}

// Collection
ScrollReveal().reveal('.collection-card:nth-child(1)', {
	opacity: 0,
	origin: 'right',
	distance: '15%',
	duration: 1750,
	delay: 250,
	easing: 'ease-in-out',
	mobile: true,
	reset: true,
});

ScrollReveal().reveal('.collection-card:nth-child(2)', {
	opacity: 0,
	origin: 'left',
	distance: '15%',
	duration: 1750,
	delay: 250,
	easing: 'ease-in-out',
	mobile: true,
	reset: true,
});

// Brands
const brandItemsNumber: number =
	(document.querySelectorAll('.brand-img') as NodeListOf<HTMLDivElement>)
		?.length ?? 0;

for (let i = 0; i < brandItemsNumber; i++) {
	ScrollReveal().reveal(`.brand-img:nth-child(${i + 1})`, {
		opacity: 0,
		duration: 1750,
		delay: 150 * (i + 1),
		easing: 'ease-in-out',
		mobile: true,
		reset: true,
	});
}
