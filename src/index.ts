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
