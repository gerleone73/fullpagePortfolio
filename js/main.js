(function() {
  $(function() {



    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage","seventhPage","eigthPage","ninthPage", "tenthPage", "eleventhPage", "twelfthPage"],
      sectionsColor: ["#fff","#fff", "#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb","#fff","#ebebeb","#fff"],


     
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
           $(".arrow-down").css({'color': '#333'});
           $(".headnav").css('background-color','#F2F2F2');
           $('.Gl').css('visibility','hidden');
           $('.Gl').fadeOut();

        }

      

        if(anchorLink!=='firstpage'){
           $('.Gl').css('visibility','visible');
          $('.Gl').fadeIn();
          $('.menuTip').fadeIn();
        }
        if (anchorLink === "secondPage") {
          $(".counter").text("2");
           $(".headnav").css('background-color','#fff');
         
         
       
        
        }
        if (anchorLink === "thirdPage") {
          $(".counter").text("3");

          $(".headnav").css('background-color','#ebebeb');
        

     
        }
          if (anchorLink === "fourthPage") {
          $(".counter").text("4");
          $(".headnav").css('background-color','#fff');
        
        }
          if (anchorLink === "fifthPage") { 
          $(".counter").text("5");
       
         $(".headnav").css('background-color','#ebebeb');
        }
        if (anchorLink === "sixthPage") {
          $(".counter").text("6");
        
         $(".headnav").css('background-color','#fff');
        }
      
        if (anchorLink === "seventhPage") {
          $(".counter").text("7");
        
         $(".headnav").css('background-color','#ebebeb');
        }
        if (anchorLink === "eigthPage") {
          $(".counter").text("8");
        
         $(".headnav").css('background-color','#fff');
        }
        if (anchorLink === "ninthPage") {
          $(".counter").text("9");
      
         $(".headnav").css('background-color','#ebebeb');
        }
        if (anchorLink === "tenthPage"){
          $(".counter").text("10");
           $(".headnav").css('background-color','#fff');
          $(".magic").addClass("animated bounceInLeft");
          $(".trophy").addClass("animated bounceInUp");
          return $(".users").addClass("animated bounceInRight");
        }

        

        if (anchorLink === "eleventhPage") {
          $(".counter").text("11");
           $(".headnav").css('background-color','#ebebeb');
        
        }
        if (anchorLink === "twelfthPage") {
          $(".counter").text("12");
           $(".headnav").css('background-color','#fff');
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
