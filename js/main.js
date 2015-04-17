(function() {
  $(function() {

     $("#element").introLoader({

   animation: {
        name: 'counterLoader',
        options: {
            exitFx:'fadeOut',
            ease: "easeOutSine",
            style: 'dark',
            delayBefore: 0, //delay time in milliseconds
            animationTime: 600,
            exitTime: 600
        }
    },

    spinJs: {}
  });



    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage","seventhPage","eighthPage","ninthPage", "tenthPage", "eleventhPage", "twelfthPage"],
      sectionsColor: ["#fff","#fff", "#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb","#fff","#ebebeb","#fff"],


     
       slidesNavigation: true,
        slidesNavPosition: 'bottom',

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
           $('#home').addClass('nav-live');

        }

        if(anchorLink!=='firstPage'){
           $('.Gl').css('visibility','visible');
          $('.Gl').fadeIn();
          $('.menuTip').fadeIn();
          $('#home').removeClass('nav-live');

        }
        if (anchorLink === "secondPage") {
          $(".counter").text("2");
           $(".headnav").css('background-color','#fff');
         $('#wise').addClass('nav-live');
        }
        if(anchorLink!=='secondPage'){
          $('#wise').removeClass('nav-live');
        }


        if (anchorLink === "thirdPage") {
          $(".counter").text("3");

          $(".headnav").css('background-color','#ebebeb');
        $('#sine').addClass('nav-live');
        }
         if(anchorLink!=='thirdPage'){
          $('#sine').removeClass('nav-live');
        }


          if (anchorLink === "fourthPage") {
          $(".counter").text("4");
          $(".headnav").css('background-color','#fff');
        
         $('#styles').addClass('nav-live');
        }
         if(anchorLink!=='fourthPage'){
          $('#styles').removeClass('nav-live');
        }


          if (anchorLink === "fifthPage") { 
          $(".counter").text("5");
       
         $(".headnav").css('background-color','#ebebeb');
         $('#kraftwerk').addClass('nav-live');
        }
         if(anchorLink!=='fifthPage'){
          $('#kraftwerk').removeClass('nav-live');
        }


        if (anchorLink === "sixthPage") {
          $(".counter").text("6");
        
         $(".headnav").css('background-color','#fff');
        $('#his').addClass('nav-live');
        }
         if(anchorLink!=='sixthPage'){
          $('#his').removeClass('nav-live');
        }
      
        if (anchorLink === "seventhPage") {
          $(".counter").text("7");
        
         $(".headnav").css('background-color','#ebebeb');
         $('#misc').addClass('nav-live');
        }
         if(anchorLink!== "seventhPage"){
          $('#misc').removeClass('nav-live');
        }


        if (anchorLink === "eighthPage") {
          $(".counter").text("8");
        
         $(".headnav").css('background-color','#fff');
         $('#cncf').addClass('nav-live');
        }
         if(anchorLink!=='eighthPage'){
          $('#cncf').removeClass('nav-live');
        }

        if (anchorLink === "ninthPage") {
          $(".counter").text("9");
      
         $(".headnav").css('background-color','#ebebeb');
         $('#crowd').addClass('nav-live');
        }
         if(anchorLink!=='ninthPage'){
          $('#crowd').removeClass('nav-live');
        }


        if (anchorLink === "tenthPage"){
          $(".counter").text("10");
           $(".headnav").css('background-color','#fff');
          $(".magic").addClass("animated bounceInLeft");
          $(".trophy").addClass("animated bounceInUp");
          $('#animation').addClass('nav-live');
          $('#fullBg').removeClass('nav-live');
          return $(".users").addClass("animated bounceInRight");
         
        }
         if(anchorLink!=='tenthPage'){
          $('#animation').removeClass('nav-live');
        }

        

        if (anchorLink === "eleventhPage") {
          $(".counter").text("11");
           $(".headnav").css('background-color','#ebebeb');
         $('#fullBg').addClass('nav-live');
        }
         if(anchorLink!=='eleventhPage'){
          $('#fullBg').removeClass('nav-live');
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
          $('#nothing').addClass('nav-live');
        }
         
          if (anchorLink !== "twelfthPage"){
             $('.nothing').fadeOut(100);
             $('.godard').fadeOut(100);
          $('.author').fadeOut(100);
          $('.birdman').fadeOut(100);
          $('#nothing').removeClass('nav-live');
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
