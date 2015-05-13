(function() {
  $(function() {

 

$('body').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
});

$(window).bind("load", function(){


  var $arrowdown = $('.arrow-down');
  var $arrowdown1 = $('.arrow-down1');

  $('body').addClass('loaded');
  $('.loading').fadeOut();

  $('body').unbind("mousewheel");


    $('.section0').css('visibility','visible');
    $('.headnav').fadeIn('fast');
    
     $('.total').fadeIn('fast');
      $('.counter').fadeIn('fast');
      $arrowdown1.fadeIn('fast');
      $arrowdown.fadeIn('fast');
     $('.hidden-text-off').hide();
     $('.hidden-text-on').hide();
     $('.hidden-text-me').hide();




      setTimeout(function(){
      $('.home-3-btns').css('opacity', '0').addClass('slideDown');


      $('menu-bars').css('opacity', '0').addClass('slideDown');
   }, 1600);

      $('.turn-off').mouseover(function(){
        $('.hidden-text-off').show();
      })
      $('.turn-off').mouseleave(function(){
        $('.hidden-text-off').hide();
      })
       $('.turn-on').mouseover(function(){
        $('.hidden-text-on').show();
      })
      $('.turn-on').mouseleave(function(){
        $('.hidden-text-on').hide();
      })
       $('.contact-me').mouseover(function(){
        $('.hidden-text-me').show();
      })
      $('.contact-me').mouseleave(function(){
        $('.hidden-text-me').hide();
      })

    //  $('.home-3-btns').addClass('btns-fixed');


        $(".titleBgSub").typed({
            strings: [ "Frontend Web Dev","HTML5 CSS JAVASCRIPT", "UX &amp; UI", "Press this Key"],
            // typing speed
            typeSpeed: 50,
            // time before typing starts
            startDelay:1200,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 1000,
            // loop
            loop: false,
            // false = infinite
            loopCount: 0,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });


if (document.documentElement.clientWidth < 1000) {
  $arrowdown.fadeOut('fast');
     $arrowdown1.fadeOut('fast');
}

 
    $(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="pressing-spacebar.mp3";
        obj.volume=0.05;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $(".playSound").click(function() {
            obj.play();
        });
 
    });
 

   
    

  
});







     var obj2 = document.createElement("audio");
      


     var $counter = $('.counter');
     var $arrowdown = $('.arrow-down');
     var $Gl = $('.Gl');
     var $Return =$('.return');
     var $home = $('#home');
     var $about = $('#about');
     var $wise = $('#wise');
     var $sine = $('#sine');
     var $styles = $('#styles');
     var $kraftwerk = $('#kraftwerk');
     var $his = $('#his');
     var $misc = $('#misc');
     var $cncf = $('#cncf');
     var $crowd = $('#crowd');
     var $react = $('#re-act');
     var $contact =$('#contact');
     var $turnOff = $ (".turn-off");
     var $turnOn = $(".turn-on");
     var $abler = $("#abler");
     var $api = $("#api");
     var $nothing = $('.nothing');
     var $Nothing = $('#nothing');
     var $godard = $('.godard');
     var $author = $('.author');
     var $music = $('.music');
     var $neu = $('#neu');
     var $birdman =$('.birdman');




   $turnOff.on('click',function(){
            $turnOff.addClass('auto-normal');
            $turnOn.removeClass('auto-normal');

        $.fn.fullpage.setAutoScrolling(false);

        $('body').css('overflow-x', 'hidden');

         });

           $turnOn.on('click',function(){
            $turnOn.addClass('auto-normal');
            $turnOff.removeClass('auto-normal');
            

        $.fn.fullpage.setAutoScrolling(true);
        });


     

    $abler.click(function() {
        if ($(this).is(":checked")) {
            $("#submitBtn").removeAttr("disabled");
        } else {
            $("#submitBtn").attr("disabled", "disabled");
        }
    });


    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage","seventhPage","eighthPage","ninthPage", "tenthPage", "eleventhPage", "twelfthPage", "thirteenthPage", 'fourteenthPage'],
      sectionsColor: ["#fff", "#252525", "#fff","#ebebeb", "#fff","#ebebeb", "#fff","#ebebeb","#fff","#ebebeb","#fff","#ebebeb","#ffff","#fff"],
       slidesNavigation: true,
        slidesNavPosition: 'bottom',
      scrollingSpeed: 1000,
      easing: 'easeInOutExpo',
      keyboardScrolling: true,
      responsive:1000,
      touchSensitivity: 10,
      autoScrolling: true,
      animateAnchor: true,
    
      afterLoad: function(anchorLink) {
        


         if (anchorLink === "firstPage") {

        


          $counter.text("1");
           $arrowdown.css({'color': '#333'});
          // $headnav.css('background-color','#D5D9D8');
          $Gl.css('color','#A8FFEE');
    

           
           $home.addClass('pulse-link');

        }

        if(anchorLink!=='firstPage'){
           $Gl.css('color','#333');
        //  $Gl.fadeIn();
        $('.home-3-btnsmall').fadeIn();
          
          $home.removeClass('pulse-link');

        }



        if (anchorLink === "secondPage") {
          $counter.text("2");
          $('.gerry').addClass("animated fadeInLeft");
       

            $('.gerrytext').addClass("animated fadeInRightBig");
            $Gl.css('color', '#ebebeb');
            $Return.css('color', '#ebebeb');
           $arrowdown.css({'color': '#333'});
           //$headnav.css('background-color','#ebebeb');
          $('.gerry').cycle({
            timeout:900,
            speed: 900,
            fx: 'fade',
            loop: 1,
          }) 
        
          
           $about.addClass('pulse-link');

        }

        if(anchorLink!=='secondPage'){
          
          $Return.css('color', '#333');
         
          $about.removeClass('pulse-link');

        }
        if (anchorLink === "thirdPage") {
          $counter.text("3");
           //$headnav.css('background-color','#fff');
         $wise.addClass('pulse-link');
        }
        if(anchorLink!=='thirdPage'){
          $wise.removeClass('pulse-link');
        }


        if (anchorLink === "fourthPage") {
          $counter.text("4");

          //$headnav.css('background-color','#ebebeb');
        $sine.addClass('pulse-link');
        }
         if(anchorLink!=='fourthPage'){
          $sine.removeClass('pulse-link');
        }


          if (anchorLink === "fifthPage") {
          $counter.text("5");
          //$headnav.css('background-color','#fff');
        
         $styles.addClass('pulse-link');
        }
         if(anchorLink!=='fifthPage'){
          $styles.removeClass('pulse-link');
        }


          if (anchorLink === "sixthPage") { 
          $counter.text("6");
       
         //$headnav.css('background-color','#ebebeb');
         $kraftwerk.addClass('pulse-link');
        }
         if(anchorLink!=='sixthPage'){
          $kraftwerk.removeClass('pulse-link');
        }


        if (anchorLink === "seventhPage") {
          $counter.text("7");
        
        // $headnav.css('background-color','#fff');
        $his.addClass('pulse-link');
        }
         if(anchorLink!=='seventhPage'){
          $his.removeClass('pulse-link');
        }
      
        if (anchorLink === "eighthPage") {
          $counter.text("8");
        
        // $headnav.css('background-color','#ebebeb');
         $misc.addClass('pulse-link');
        }
         if(anchorLink!== "eighthPage"){
          $misc.removeClass('pulse-link');
        }


        if (anchorLink === "ninthPage") {
          $counter.text("9");
        
        // $headnav.css('background-color','#fff');
         $cncf.addClass('pulse-link');
        }
         if(anchorLink!=='ninthPage'){
          $cncf.removeClass('pulse-link');
        }

        if (anchorLink === "tenthPage") {
          $counter.text("10");
      
        // $headnav.css('background-color','#ebebeb');
         $crowd.addClass('pulse-link');
        }
         if(anchorLink!=='tenthPage'){
          $crowd.removeClass('pulse-link');
        }


        

        if (anchorLink === "eleventhPage") {
          $counter.text("11");
          // $headnav.css('background-color','#fff');
         $react.addClass('pulse-link'); 
        }
         if(anchorLink!=='eleventhPage'){
         $react.removeClass('pulse-link'); 
        }

         if (anchorLink === "twelfthPage"){
          $counter.text("12");
          $api.addClass('pulse-link');


         
        }
         if(anchorLink!=='twelfthPage'){
          $api.removeClass('pulse-link');
        }


          if (anchorLink === "thirteenthPage") {
             $counter.text("13");
              $author.fadeOut(100);
                $('#section11').find('.slide').addClass('loadImage');
             obj2.load();         /* added here as well to ensure doesnt play on page 12*/
             $nothing.fadeOut(100);
             $godard.fadeOut(100);
          $author.fadeOut(100);
          $music.fadeOut(100);
          $neu.fadeOut(100);
          $birdman.fadeOut(100);
          $Nothing.removeClass('pulse-link'); 
          
        

          //  $Gl.css('color', '#ebebeb');
          //  $Return.css('color', '#ebebeb');
         $contact.addClass('pulse-link');
       }

       if(anchorLink !== "thirteenthPage") {
        $contact.removeClass('pulse-link');
       }
        

        if (anchorLink === "fourteenthPage") {
              obj2.src="leb wohl edit-sm.mp3";
        obj2.volume=0.3;
        obj2.autoPlay=false;
        obj2.preLoad=true;
        obj2.paused=false;


        if (typeof obj2.loop == 'boolean')
{
    obj2.loop = true;
}
else
{
    obj2.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}     
        obj2.play();
        
        $counter.text("14");
            
     $('.stop').on( "click", function() {
      obj2.load();
     }); 

     $('.play').on( "click", function() {
       obj2.play();

     }); 

     $('.fa-pause').on("click",function() {

      
     if(obj2.paused){
      obj2.play();
     }
     else{
      obj2.pause();
     }
     $(this).toggleClass('pause');


     });
       
/*

      if ( $('#neu').css('visibility') == 'hidden' )
    $('#neu').css('visibility','visible');
  else
    $('#neu').css('visibility','hidden');

     }); 
 */         
          
           

          
         
         //  $headnav.css('background-color','#fff');
          $nothing.fadeIn('slow').birdman({
                        speedup:false,
                        delay:0
                      });
          $birdman.fadeIn().birdman({
                        speedup:false,
                        delay:900
                      });
           $godard.fadeIn().birdman({
                        speedup:true,
                        delay:300
                      });    
          
          $author.fadeIn(6000);
          $neu.fadeIn(1000);
          $music.fadeIn(1000);
          $Nothing.addClass('pulse-link');
        }
         
          if (anchorLink !== "fourteenthPage"){
            obj2.load();

            obj2.paused=true;

           
             $nothing.fadeOut(100);
             $godard.fadeOut(100);
          $author.fadeOut(100);
          $music.fadeOut(100);
          $neu.fadeOut(100);
          $birdman.fadeOut(100);
          $Nothing.removeClass('pulse-link');
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
