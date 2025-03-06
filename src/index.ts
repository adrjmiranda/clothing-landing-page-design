/**
 * Change Navbar Background
 */
const ACTIVE_NAVBAR_CLASS: string = 'active';

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
const toggleThemeButton = document.getElementById(
	'toggle-theme'
) as HTMLButtonElement;

toggleThemeButton?.addEventListener('click', () => {
	(toggleThemeButton.querySelectorAll('i') as NodeListOf<HTMLElement>)?.forEach(
		(icon) => icon.classList.toggle('__hidden')
	);

	document.body.classList.toggle('__light');
	document.body.classList.toggle('__dark');
});
