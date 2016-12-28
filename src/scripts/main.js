/*Funcion autoejecutable*/
(function(){
	var loadCSS = require('./lib/loadCSS');
	var OnScroll = require('./lib/onScroll');
	document.addEventListener('DOMContentLoaded', onDOMLoad);
		
	/*headerElem.addEventListener('scroll', fixHeader)
	function fixHeader(){
		if(window.scrollY>=230){
			headerElem.classList.toggle('.header--light');
		}
		else{
			headerElem.classList.toggle('.header--light');
		}
	}*/
	function onDOMLoad(){
		var btnMenu = document.getElementById('btnMenu');	
		loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');
		loadCSS('https://fonts.googleapis.com/css?family=Montserrat|Lato');
		btnMenu.addEventListener('click', onClickMenu);
		function onClickMenu(){
			navbarMenu.classList.toggle('header-menu-list--show');
		}
		//Para el light del navbar		
		window.addEventListener('scroll', OnScroll);
	}
}());