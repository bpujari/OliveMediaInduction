$(document).ready(function() {
 
  $("#intro-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
    	autoPlay : true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});


$(document).ready(function() {
 
  $("#carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
      itemsTablet: [768,2]
 
  });
 
});

// video player
$(document).ready(function () {

    $(".player").mb_YTPlayer();

});

$('.collapse').collapse({
    toggle: false
});