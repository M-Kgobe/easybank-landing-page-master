// Activating the hamburger and navigation links

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const headerShadow = document.querySelector('#header')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navLinks.classList.toggle('nav-links-active')
    headerShadow.classList.toggle("scroll-active-hamburger");

})

// Removing active classes when clicking outside/on links in the Navigation

document.onclick = function (e) {
	if (e.target.id !== "nav-links" && e.target.id !== "hamburger") {
		navLinks.classList.remove("nav-links-active");
        hamburger.classList.remove("hamburger-active");
        headerShadow.classList.remove("scroll-active-hamburger");
	}
};

// Making the header fixed on scroll

window.addEventListener("scroll", function () {
	const header = document.getElementById("header");
	const windowPosition = window.scrollY > 0;

    header.classList.toggle("scroll-active", windowPosition);
    header.classList.toggle(".desktop-scroll",windowPosition);
    
    document.onscroll = function (e) {
        if (e.target.id !== "nav-links" && e.target.id !== "hamburger") {
            navLinks.classList.remove("nav-links-active");
            hamburger.classList.remove("hamburger-active");
            headerShadow.classList.remove("scroll-active-hamburger");
        }
    };
});