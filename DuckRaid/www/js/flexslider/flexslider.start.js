/*!
 * flexslider.start.js
 * Julio Osorio
 * 23/09/2014
 * 
 * Archivo utilizado para iniciar el flexslider dentro de una página
 */

/* Codigo que se ejecuta al cargar completamente la página */
$(window).load(function() {
	
	/* Inicia el flexslider */
	$('.flexslider').flexslider({
		animation: "slide",
		slideshow: false
	});
});
