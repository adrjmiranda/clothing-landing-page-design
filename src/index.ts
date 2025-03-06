/**
 * Change Navbar Background
 */
const navbar = document.getElementById('navbar') as HTMLDivElement;

window.onscroll = function () {
	if (window.scrollY > 0) {
		navbar?.classList.add('active');
	} else {
		navbar?.classList.remove('active');
	}
};
