(function() {
  $(function() {

$('body').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})

$('.loading').fadeOut(6600);

    // Fakes the loading setting a timeout & unbind mouswheel to allow scroll
    setTimeout(function() {
        $('body').addClass('loaded');

        $('body').unbind("mousewheel");
    }, 6000);




     var obj2 = document.createElement("audio");
        obj2.src="leb wohl edit.mp3";
        obj2.volume=0.3;
        obj2.autoPlay=false;
        obj2.preLoad=true;       
 
        
            
     $('.stop').on( "click", function() {
      obj2.load();
     }); 

     $('.play').on( "click", function() {
       obj2.play();
     }); 

     $('.fa-music').on("click",function() {
      if ( $('#neu').css('visibility') == 'hidden' )
    $('#neu').css('visibility','visible');
  else
    $('#neu').css('visibility','hidden');

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
          obj2.play();
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
          
          $('.author').fadeIn(6000);
          $('.music').fadeIn(1000);
          $('#nothing').addClass('nav-live');
        }
         
          if (anchorLink !== "twelfthPage"){
            obj2.load();
             $('.nothing').fadeOut(100);
             $('.godard').fadeOut(100);
          $('.author').fadeOut(100);
          $('.music').fadeOut(100);
          $('#neu').css('visibility','hidden');
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
