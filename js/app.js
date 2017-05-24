$('.link').hover(function(){
    $('.project-name, .description, .view-link').toggleClass('opacity');
});

/*=== Scroll Down ===*/
$('svg#scroll').click(function(){
	$('html, body').animate({
	   scrollTop: $(this).offset().top + 50
	}, 1000);
	return false;
});
/*=== //End Scroll Down ===*/

/* ===== GSAP Animations ==== */
if (screen.width > 480){
  $(function () { // wait for document ready

      // init controller
    	var controller = new ScrollMagic.Controller();


	     // define movement of panels
	     var wipeAnimation = new TimelineMax()
	         .fromTo("div.slider-horizontal.panel",    1, {x:  "3.5%"}, {x: "-85%", ease: Linear.easeNone});  // in from right
	         // create scene to pin and link animation
	     new ScrollMagic.Scene({
	         triggerElement: "#pinContainer",
	         triggerHook: "onLeave",
	         duration: "300%"
	     })
	     .setPin("#pinContainer")
	     .setTween(wipeAnimation)
	     .addTo(controller);


	     // define movement of panels
	     var partners = new TimelineMax()
	         .fromTo("div.partners-horizontal.panel",    1, {x:  "5%"}, {x: "-65%", ease: Linear.easeNone});  // in from right
	         // create scene to pin and link animation
	     new ScrollMagic.Scene({
	         triggerElement: "#partners",
	         triggerHook: "onLeave",
	         duration: "300%"
	     })
	     .setPin("#partners")
	     .setTween(partners)
	     .addTo(controller);

	     // define movement of panels
	     var studio = new TimelineMax()
	         .fromTo("div.studio-horizontal.panel",    1, {x:  "0%"}, {x: "-70%", ease: Linear.easeNone});  // in from right
	         // create scene to pin and link animation
	     new ScrollMagic.Scene({
	         triggerElement: "#studio",
	         triggerHook: "onLeave",
	         duration: "300%"
	     })
	     .setPin("#studio")
	     .setTween(studio)
	     .addTo(controller);

       var introImage = new TimelineMax()
	         .fromTo("div.intro-image .w-70", 1, {"width":  "70%"}, {"width": "100%", ease: Linear.easeNone});  // in from right
	         // create scene to pin and link animation

       // build scene
			var scene = new ScrollMagic.Scene({triggerElement: "#trigger-image", duration: 400})
						// animate color and top border in relation to scroll position
						.setTween(introImage) // the tween durtion can be omitted and defaults to 1
						//.addIndicators({name: "2 (duration: 600)"}) // add indicators (requires plugin)
						.addTo(controller);

	});
}
/* ===== //End GSAP Animations ===== */

/* ===== Sticky NAV =====*/

// Cache selectors
var lastId,
    topMenu = $("#sticky-nav"),
    topMenuHeight = topMenu.outerHeight()+0,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 800);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});

/* ===== //End Sticky Nav =====*/
