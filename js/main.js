(function() {
  $(function() {
    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage","seventhPage","eigthPage","ninthPage", "tenthPage", "eleventhPage", "twelfthpage"],
      slidesColor: ["#fff", "#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb","#fff","#ebebeb","#fff"],


     
       slidesNavigation: true,
        slidesNavPosition: 'top',

      scrollingSpeed: 1200,
      easing: 'easeInOutExpo',
      keyboardScrolling: true,
      touchSensitivity: 10,
      continuousVertical: true,
      animateAnchor: true,
      afterLoad: function(anchorLink) {
        if (anchorLink === "twelfthPage") {
          $("#fullpage").fullpage({scrollBar: true});
        }

        if (anchorLink === "firstPage") {
          $(".counter").text("1");
          $(".typing1").addClass('css-typing');
         
       
        $(".arrow-down").css({'color': '#DD8F00', 'border':'1px solid #DD8F00'});
        }
        if (anchorLink === "secondPage") {
          $(".counter").text("2");
          $(".typing2").addClass('css-typing');

        $(".arrow-down").css({'color': '#333','border':'1px solid #333'});
        }
          if (anchorLink === "thirdPage") {
          $(".counter").text("3");
        $(".arrow-down").css({'color': '#FF7900','border':'1px solid #FF7900'});
        }
          if (anchorLink === "fourthPage") { 
          $(".counter").text("4");
        $(".arrow-down").css({'color': '#FD301B;','border':'1px solid #FD301B;'});
        }
        if (anchorLink === "fifthPage") {
          $(".counter").text("5");
        $(".arrow-down").css({'color': '#3F0B3F','border':'1px solid #3F0B3F'});
        }
      
        if (anchorLink === "sixthPage") {
          $(".counter").text("6");
        $(".arrow-down").css({'color': '#5e5e5e','border':'1px solid #5e5e5e'});
        }
        if (anchorLink === "seventhPage") {
          $(".counter").text("7");
        $(".arrow-down").css({'color': '#BA3126','border':'1px solid #BA3126'});
        }
        if (anchorLink === "eigthPage") {
          $(".counter").text("8");
        $(".arrow-down").css({'color': '#3285E7','border':'1px solid #3285E7'});
        }
        if (anchorLink === "ninthPage"){
          $(".counter").text("9");
          $(".magic").addClass("animated bounceInLeft");
          $(".trophy").addClass("animated bounceInUp");
          return $(".users").addClass("animated bounceInRight");
        }
        if (anchorLink === "tenthPage") {
          $(".counter").text("10");
        }
         if (anchorLink === "eleventhPage") {
          $(".counter").text("11");
          $('.nothing').fadeIn('slow').birdman({
                        speedup:false,
                        delay:0
                      });
          $('.birdman').fadeIn().birdman({
                        speedup:false,
                        delay:900
                      });
           $('.godard').fadeIn().birdman({
                        speedup:true,
                        delay:300
                      });
          
          
          
          $('.author').fadeIn(9000);
         
          $(".arrow-down").css({'color': '#3285E7','border':'1px solid #3285E7'});
        }
          if (anchorLink !== "eleventhPage"){
             $('.nothing').fadeOut(100);
             $('.godard').fadeOut(100);
          $('.author').fadeOut(100);
          $('.birdman').fadeOut(100);
          }
      }
    });


    





    $("#menu").click(function() {
      $('.menu-bars').toggleClass("open");
      return $(".overlay").toggleClass("open");
    });
    return $(".overlay ul li a").click(function() {
      $(".overlay").removeClass("open");
      return $('.menu-bars').removeClass("open");
    });
  });

}).call(this);
