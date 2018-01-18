;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		$('.intro , .header h1').addClass('animate');

		//Slider activate
		 $(".owl-carousel-primary").owlCarousel({
	  		loop:true,
	  	    autoplay : true,
	  	    autoplayTimeout : 4000,
	  	    items:4,
	  	    autoplaySpeed: 2000,
	  	    nav:false,
	  	    dots: false,
	  	    responsive: {
	  	    	0 : {
	  	    		items :1
	  	    	},

	  	    	460 : {
	  	    		items : 2
	  	    	},
	  	    	768 : { 
	  	    		items : 3
	  	    	},
	  	    	992 : {
	  	    		items: 4
	  	    	}	
	  	    }

	  	});	

		 //Slider secondary logos activate
		 $(".owl-carousel-secondary").owlCarousel({
		 	rtl:true,
	  		loop:true,
	  	    autoplay : true,
	  	    autoplayTimeout : 4000,
	  	    items:3,
	  	    autoplaySpeed: 2000,
	  	    nav:false,
	  	    dots: false,
	  	    responsive: {
	  	    	0 : {
	  	    		items :1
	  	    	},

	  	    	460 : {
	  	    		items : 2
	  	    	},
	  	    	768 : { 
	  	    		items : 3
	  	    	}	
	  	    }

	  	});	
		
		//Open Pop Up
		$('.btn-open-popup').on('click', function(e){
			e.preventDefault();

			$(this).parents('.project').addClass('active');

			$('body').addClass('active');
		});

		//Close Pop Up
		$('.btn-popup-close').on('click', function(e){
			e.preventDefault();

			$(this).parents('.project').removeClass('active');
			$('body').removeClass('active');
		});

		//Fix header and buton scroll top on scroll
		$win.on('load scroll', function() {
      		$('.header,.btn__scroll__top').toggleClass('fixed', $win.scrollTop() > 111);  
      
    	});

    	//Validate Form
    	$('.form__contacts form').on('submit', function(){
    		var fields = $('.form__controls input');
    		var textarea = $('textarea');
    		var emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		var letters = /[A-Za-z]+$/; 
    		var testA = 0;
    		
			if(!letters.test(fields[0].value)){
				alert(fields[0].placeholder + " field is empty, please fill it");
				
			}else if(!emailreg.test(fields[1].value)){
					alert("Please enter correct e-mail");
			}else if(emailreg.test(fields[i].value) && letters.test(fields[0].value)){
					testA = 1;
			}

			if(testA == 1){
				return true;
			}else  {
				return false;
			}

    	})
		
		//Scroll top
		$('.btn__scroll__top').on('click', function(e){
			e.preventDefault();

			$("html,body").animate({scrollTop: 0}, 1500);
		});

		//Button read more scroll animation
		$('.intro .btn__red').on('click', function(e){
			e.preventDefault();
			var target_offset = $("#about").offset().top;

			$("html, body").animate({scrollTop: target_offset}, 1500);
		});

		//Trigger nav trigger button
		$('.nav-trigger').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$('.nav').toggleClass('active');
		});

		//Navigation scroll to anchor
		$(".nav a").on('click', function(e){
			e.preventDefault();
			$this = $(this);
			
		    //get the full url - like mysitecom/index.htm#home
		    var full_url = this.href;

		    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
		    var parts = full_url.split("#");
		    var trgt = parts[1];

		    //get the top offset of the target anchor
		    var target_offset = $("#"+trgt).offset();
		    var target_top = target_offset.top;

		    //goto that anchor by setting the body scroll top to anchor top
		    $('html, body').animate({scrollTop:target_top}, 1500);

		});

		// Cache selectors
		var lastId,
		    topMenu = $(".nav ul"),
		    topMenuHeight = topMenu.outerHeight()+15,
		    // All list items
		    menuItems = topMenu.find("a"),
		    // Anchors corresponding to menu items
		    scrollItems = menuItems.map(function(){
		      var item = $($(this).attr("href"));
		      if (item.length) { return item; }
		    });

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		

		// Bind to scroll
		$win.scroll(function(){
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
		       // Set/remove current class
		       menuItems
		         .parent().removeClass("current")
		         .end().filter("[href='#"+id+"']").parent().addClass("current");
		   }                   
		});

			  $win.scroll(function() {
				 var winT = $win.scrollTop();
				 performanceData(winT)
				 
				 function performanceData(topPosition) {
					$('.js-animation').each(function() {
					var element = $(this),
					winH = $win.height()/1.5

					for (var i = element.length - 1; i >= 0; i--) {
							var currentElementTop = element.eq(i).offset().top - winH - 20

							if ( topPosition > currentElementTop ) {
								element.addClass('animate')
							} else {
								element.removeClass('animate')
							};
						};
					})
				}
			});

	});	
})(jQuery, window, document);
