(function() {
  $(function() {



    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage","seventhPage","eigthPage","ninthPage", "tenthPage", "eleventhPage", "twelfthPage"],
      sectionsColor: ["#ebebeb","#fff", "#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb","#fff","#ebebeb","#fff"],


     
       slidesNavigation: true,
        slidesNavPosition: 'top',

      scrollingSpeed: 1000,
      easing: 'easeInOutExpo',
      keyboardScrolling: true,
      responsive:1000,
      touchSensitivity: 10,
      animateAnchor: true,
      afterLoad: function(anchorLink) {


        if (anchorLink === "firstPage") {
          $(".counter").text("1");
           $(".arrow-down").css({'color': '#fff'});

        }

        if(anchorLink!=='firstpage'){
          $('.Gl').fadeIn();
          $('.menuTip').fadeIn();
        }
        if (anchorLink === "secondPage") {
          $(".counter").text("2");

         
         
       
        $(".arrow-down").css({'color': '#DD8F00'});
        }
        if (anchorLink === "thirdPage") {
          $(".counter").text("3");
        

        $(".arrow-down").css({'color': '#333'});
        }
          if (anchorLink === "fourthPage") {
          $(".counter").text("4");
        $(".arrow-down").css({'color': '#FF7900'});
        }
          if (anchorLink === "fifthPage") { 
          $(".counter").text("5");
        $(".arrow-down").css({'color': '#FD301B'});
        }
        if (anchorLink === "sixthPage") {
          $(".counter").text("6");
        $(".arrow-down").css({'color': '#3F0B3F'});
        }
      
        if (anchorLink === "seventhPage") {
          $(".counter").text("7");
        $(".arrow-down").css({'color': '#5e5e5e'});
        }
        if (anchorLink === "eigthPage") {
          $(".counter").text("8");
        $(".arrow-down").css({'color': '#BA3126'});
        }
        if (anchorLink === "ninthPage") {
          $(".counter").text("9");
        $(".arrow-down").css({'color': '#3285E7'});
        }
        if (anchorLink === "tenthPage"){
          $(".counter").text("10");
          $(".magic").addClass("animated bounceInLeft");
          $(".trophy").addClass("animated bounceInUp");
          return $(".users").addClass("animated bounceInRight");
        }

        if (anchorLink === "eleventhPage") {
          $(".counter").text("11");
        
        }
        if (anchorLink === "twelfthPage") {
          $(".counter").text("12");
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
          
          $('.author').fadeIn(8000);
         
          $(".arrow-down").css({'color': '#3285E7'});
        }
          if (anchorLink !== "twelfthPage"){
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
