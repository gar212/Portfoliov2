$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	items:1,
    margin:10,
    autoHeight:true,
	nav:true,
	dots: false,
	autoplay: true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	loop: true,
	lazyLoad: true
  });
});