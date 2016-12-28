var OnScroll = function () {

	var headerElem = document.querySelector('.header');
var navbarMenu = document.getElementById('navbarMenu');
				    if(window.scrollY >= 230) {
				        headerElem.classList.add('header--light');
				        navbarMenu.classList.add('header--light');
				    } else {
				        headerElem.classList.remove('header--light');
				        navbarMenu.classList.remove('header--light');
				    }
				}

module.exports = OnScroll;