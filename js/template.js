/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){
	$(document).ready(function(){
	
		$(".banner-image").backstretch('images/banner.webp');
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				// if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
				if($(this).scrollTop() > 0) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).on('load',function() {
			if (($(".header.fixed").length > 0)) { 
				// if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
				if($(this).scrollTop() > 0) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).on('load',function(){
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'fitRows',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);