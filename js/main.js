var jQ = jQuery.noConflict();

jQ(document).ready(function(){
  if (typeof foo !== 'undefined') {
    // Now we know that foo is defined, we are good to go.
  }
  jQ('html').attr('user-agent',navigator.userAgent);
  
  /*START function Slider Bullets Wrap----------------------------
    function bulletsWrap($sliderID){
      var indicatorsProduct= jQ($sliderID + " .carousel-item").size();  
      var row = jQ('<li data-bs-target="'+$sliderID+'"></li>');
      
      for (var i=0; i<indicatorsProduct; i++) {
          jQ($sliderID + ' .carousel-indicators').append(row.clone());
      }
      var counterProduct=-1;
      jQ($sliderID + " .carousel-indicators li").each(function(){
      counterProduct++;
          var self=jQ(this);
          self.attr('data-bs-slide-to', counterProduct);
      });  

      jQ($sliderID + " .carousel-indicators li").first().addClass('active');
    }
    /* Boostrap 5 new structure 
    function bulletsWrap5($sliderID){
      var indicatorsProduct= jQ($sliderID + " .carousel-item").size();  
      var row = jQ('<button data-bs-target="'+$sliderID+'" type="button"></button>');
      
      for (var i=0; i<indicatorsProduct; i++) {
          jQ($sliderID + ' .carousel-indicators').append(row.clone());
      }
      var counterProduct=-1;
      jQ($sliderID + " .carousel-indicators button").each(function(){
      counterProduct++;
          var self=jQ(this);
          self.attr('data-bs-slide-to', counterProduct);
      });  

      jQ($sliderID + " .carousel-indicators button").first().addClass('active');
    }
  /*END function Slider Bullets Wrap----------------------------*/
    jQ("#home-slider").swiperight(function() {
      jQ(this).carousel('prev');
    });
    jQ("#home-slider").swipeleft(function() {
      jQ(this).carousel('next');
    });
    //bulletsWrap("#home-slider");

    //****** Pause and Play Carousel Interval ******// 
    var slider = document.getElementById('home-slider');
    if(slider){
      var buttonplay = document.getElementById('play');
      buttonplay.addEventListener('click', function () {
       jQ('.carousel').attr('data-bs-interval', '8000');
       jQ('.pause').show();
       jQ('.play').hide();
      });
      var buttonpause = document.getElementById('pause');
      buttonpause.addEventListener('click', function () {
       jQ('.carousel').attr('data-bs-interval', 'false');
       jQ('.play').show();
       jQ('.pause').hide();
      });
    }
   //****** Pause and Play Carousel Interval ******//

    jQ("#home-slider-video").swiperight(function() {
      jQ(this).carousel('prev');
    });
    jQ("#home-slider-video").swipeleft(function() {
      jQ(this).carousel('next');
    });
    //bulletsWrap("#home-slider-video");

    //****** Pause and Play Video ******// 
      var video = document.getElementById('home-video');
      if(video){
        var buttonplay = document.getElementById('play');
        buttonplay.addEventListener('click', function () {
        video.play();
          jQ('.pause').show();
          jQ('.play').hide();
        });
        var buttonpause = document.getElementById('pause');
        buttonpause.addEventListener('click', function () {
        video.pause();
          jQ('.play').show();
          jQ('.pause').hide();
        });
        document.getElementById('home-video').addEventListener('ended',myHandler,false);
        function myHandler(e) {
          jQ('.play').show();
          jQ('.pause').hide();
        }
      }
    //****** Pause and Play Video ******//
    
    // jQ("#carouselMobileExplore").swiperight(function() {
    //   jQ(this).carousel('prev');
    // });
    // jQ("#carouselMobileExplore").swipeleft(function() {
    //   jQ(this).carousel('next');
    // });
    // bulletsWrap5("#carouselMobileExplore");

  /*START function Video Modal----------------------------*/
    jQ("button.video.mp4").click(function () {
      var theModal = jQ(this).data("bs-target"),
      videoSRC = jQ(this).attr("data-video"),
      videoSRCauto = videoSRC;
      jQ(theModal).find("video").css("display", "block");
      jQ(theModal).find("iframe").css("display", "none");
      jQ(theModal + ' video source').attr('src', videoSRCauto);
        
      setTimeout(function() {
        jQ(theModal + ' video').get(0).load();
        jQ(theModal + ' video').get(0).play();
      },500);

      jQ(theModal + ' button.close').click(function () {
        jQ(theModal + ' video source').attr('src', videoSRC);
        jQ(theModal + ' video').get(0).pause();
      });
    });
    jQ("button.video.youtube").click(function () {
      var theModal1 = jQ(this).data("bs-target"),
      videoSRC1 = jQ(this).attr("data-video"),
      videoSRCauto1 = videoSRC1 + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";
      jQ(theModal1).find("video").css("display", "none");
      jQ(theModal1).find("iframe").css("display", "block");
      jQ(theModal1 + ' iframe').attr('src', videoSRCauto1);
      jQ(theModal1 + ' button.close, .modal').click(function () {
        jQ(theModal1 + ' iframe').attr('src', videoSRC1);
      });
    });
    jQ("button.video.vimeo").click(function () {
      var theModal1 = jQ(this).data("bs-target"),
      videoSRC1 = jQ(this).attr("data-video"),
      videoSRCauto1 = videoSRC1 + "?autoplay=1&loop=1&autopause=0";
      jQ(theModal1).find("video").css("display", "none");
      jQ(theModal1).find("iframe").css("display", "block");
      jQ(theModal1 + ' iframe').attr('src', videoSRCauto1);
      jQ(theModal1 + ' button.close, .modal').click(function () {
          jQ(theModal1 + ' iframe').attr('src', videoSRC1);
      });
    });
    jQ(document).on('keydown', function(event) {
      if (event.key == "Escape") {
        jQ('.embed-responsive-item').attr('src', '');
      }
    });
    if(jQ('.modal[role="dialog"]') !== undefined){
      jQ('.modal[role="dialog"]').each(function(){
        jQ(this).appendTo('body');
      });
    }
  /*END function Video Modal----------------------------*/

  // var sectionAbout = jQ('.section-about');
  // if(sectionAbout.length !== 0){
  //   var $topCaption = jQ('.top-caption');
  //   jQ('.top-caption').css('top','-'+$topCaption.outerHeight()+'px');
  // }

/*START Resize--------------------*/
 function myOrientResizeFunction(){

  jQ('.menu-footer > li').removeClass('dropdown');

  if (jQ(window).width() >= 1199.99){
    
    setTimeout(function() {

      var $wpAdminBar = jQ('#wpadminbar');
      if ($wpAdminBar.length) {
       jQ('body:not(.page-template-donate) header.header').css('margin-top',$wpAdminBar.height()+'px');
      }

    },500);
    
    //jQ('body.page-template-no-banner, body.tribe-events-page-template, body.page-template-event-template').addClass('fixed');

    /*START Fixed Header--------------------*/
      var $headerOffset = jQ('header.header').offset().top;
      if( $headerOffset >= 50 ){
       jQ('body').addClass('fixed');
      }
      jQ(window).bind('scroll', function () {
          if (jQ(window).scrollTop() > 50) {
            jQ('body').addClass('fixed');
          }
          else {
            jQ('body:not(.page-template-no-banner):not(.tribe-events-page-template):not(.page-template-event-template)').removeClass('fixed');
          }
      });
    /*END Fixed Header--------------------*/
    /*START Dropdown Main Menu Animation--------------------*/

    jQ(".dropdown-btn").unbind();
    jQ('.dropdown, .dropdown-menu').unbind();
    jQ('.dropdown-btn').remove();

      /*START Dropdown Main Menu Animation--------------------*/
    jQ('.dropdown, .dropdown-menu').hover(function(){
      jQ(this).children('.dropdown-menu').stop(true, false).slideDown("fast").addClass('display_dropdown');
    }, function(){
        jQ(this).children('.dropdown-menu').stop(true, false).slideUp("fast").removeClass('display_dropdown');
    });
    jQ(".dropdown-btn").click(function(){
        jQ(this).next().slideToggle("fast");
    });

    /*END Dropdown Main Menu Animation--------------------*/

  }  else if (jQ(window).width() <= 1199.98) {

    jQ('#home-slider').removeClass('zoom-effect');

    setTimeout(function() {

      var $wpAdminBar = jQ('#wpadminbar');
      if ($wpAdminBar.length) {
       jQ('body:not(.page-template-donate) header.header').css('margin-top',$wpAdminBar.height()+'px');
      }

    },500);
    
    var $headerOffset = jQ('header.header').offset().top;
    if( $headerOffset >= 80 ){
      jQ('body').addClass('fixed');
    }
    /*START Fixed Header--------------------*/
      jQ(window).bind('scroll', function () {
          if (jQ(window).scrollTop() > 80) {
            jQ('body').addClass('fixed');
          }
          else {
            jQ('body:not(.page-template-no-banner):not(.tribe-events-page-template):not(.page-template-event-template)').removeClass('fixed');
          }
      });
    /*END Fixed Header--------------------*/
    
    /*START Include Dropdown Button--------------------*/
      jQ('.dropdown-btn').remove();
      var itemBtn = '<button  class="dropdown-toggle dropdown-btn"><span class="fas fa-chevron-right"></span></button>';
      jQ( 'header .nav .dropdown > a').after(itemBtn);
    /*END Include Dropdown Button--------------------*/
   
      var $sidenav = jQ('.header-navigation #NavDropdown'),
          $toggler = jQ('.header-navigation .navbar-toggler');

      $toggler.click(function() {
        $toggler.toggleClass('active');
        if (!$sidenav.hasClass('show')) {
          showSidenav();
          jQ('.header-navigation .navbar-brand, .header-navigation .mobile-view, .navbar-toggler').addClass('active');
        } else {
          hideSidenav();
          jQ('.header-navigation .navbar-brand, .header-navigation .mobile-view, .navbar-toggler').removeClass('active');
        }
        $sidenav.toggleClass('show');
      });

      function showSidenav() {
        $sidenav.css('display', 'block');
        window.setTimeout(function() {
          if(jQ(window).width() <= 575.98){
            $sidenav.css({
              'width':'100vw',
            });
          } else {
            $sidenav.css({
              'width':'370px',
            });
          }
        }, 100);
        $sidenav.addClass('show');
      };

      function hideSidenav() {
        $sidenav.css({
          'width':'0px'
        });
        window.setTimeout(function() {
          $sidenav.css('display', 'none');
        }, 500);
        $sidenav.removeClass('show');
      };

    /*START Dropdown Main Menu Animation--------------------*/
      jQ(".dropdown-btn").unbind();
      jQ('.dropdown, .dropdown-menu').unbind();

      jQ(".dropdown-btn, .dropdown-toggle .dropdown-btn").click(function(){
          jQ(this).find('.fas').toggleClass('open');
          jQ(this).next().slideToggle('open');
      });
    /*END Dropdown Main Menu Animation--------------------*/

    /*START Dropdown Main Menu Animation--------------------*/
      jQ('header .nav .dropdown .dropdown-menu').css('display','none');
      jQ(".dropdown, .dropdown-menu .dropdown").unbind();
      jQ( "#NavDropdown ul li.menu-item-has-children").each(function(){
        jQ('#NavDropdown ul li.menu-item-has-children ul li.active').parent().parent().addClass('active');
      });

    /*END Dropdown Main Menu Animation--------------------*/

  } 
  
  /*END header mobile-------------------------------------------------------------------------------------------*/

  /********************************
    Carousel Homepage 
  ********************************/   
    //jQ('#home-slider ol.carousel-indicators li').remove();
    //bulletsWrap("#home-slider");
    //jQ('#home-slider-video ol.carousel-indicators li').remove();
    //bulletsWrap("#home-slider-video");
    // jQ('#carouselMobileExplore .carousel-indicators button').remove();
    // bulletsWrap5("#carouselMobileExplore");
     
  } myOrientResizeFunction();

  //*START carousels Touchable--------------------*/

  jQ(window).bind('resize', function(e){
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function(){
       // this.location.reload(false); /* false to get page from cache */
        myOrientResizeFunction();
    }, 0);
  }); 

  jQ(window).resize(function(){
   myOrientResizeFunction();
  });

  /*START Search--------------------*/    
    jQ('.search #searchform #s').attr('placeholder', 'Search here...');
    jQ('#open-search, .header-navigation.desktop-menu #open-search').click(function() {
      jQ('.search-section').slideToggle('400');
        setTimeout(function(){
        jQ('#s').focus();
      },500);
    });  
  /*END Search--------------------*/

});
 

/*FUNCTION SLOW ANIMATION ANCHOR LINKS-------------------------------*/

  // jQ(document).ready(function(){
  //   jQ(window).load(function(){
  //     var hash = window.location.hash; 
  //     if(hash){
  //       jQ('a[href*="'+hash+'"]').addClass('open');
  //       setTimeout(function() {
  //         window.scrollTo(0, 0);
  //       }, 1);
  //       setTimeout(function() {
  //         jQ('html,body').animate({
  //           scrollTop: jQ(hash).offset().top - 135
  //         }, 600);
  //       }, 1200);
  //     }
  //   });
  // });

  jQ(".anchor").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      
      var target = jQ(this.hash);
      target = target.length ? target : jQ('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQ('html,body').animate({
          scrollTop: target.offset().top - 135
        }, 600);
        return false;
      }
    }
  });

  // jQ(function() {
  //   jQ('#return-to-top').click(function() {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //       var target = jQ(this.hash);
  //       target = target.length ? target : jQ('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         jQ('html,body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });
  // });
