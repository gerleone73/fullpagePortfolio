(function() {
  $(function() {
    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthPage","seventhPage","eigthPage","ninthPage", "tenthPage"],
      slidesColor: ["#eef2f2", "#ebebeb", "#eef2f2","#ebebeb", "#eef2f2","#ebebeb", "#eef2f2","#ebebeb","#eef2f2","#ebebeb"],
      navigation: true,
        navigationPosition: 'right',
        navigationTooltips: false,
      slidesNavigation: true,
      scrollingSpeed: 800,
      keyboardScrolling: true,
      touchSensitivity: 10,
      continuousVertical: false,
      animateAnchor: true,
      afterLoad: function(anchorLink) {
        if (anchorLink === "firstPage") {
          $(".counter").text("1");
        $(".counter").css({'backgroundColor': '#DD8F00'});
        }
        if (anchorLink === "secondPage") 
          $(".counter").text("2");
          if (anchorLink === "thirdPage") 
          $(".counter").text("3");
          if (anchorLink === "fourthPage") 
          $(".counter").text("4");
        if (anchorLink === "fifthPage") 
          $(".counter").text("5");
        if (anchorLink === "sixthPage") 
          $(".counter").text("6");
        if (anchorLink === "seventhPage") 
          $(".counter").text("7");
        if (anchorLink === "eigthPage"){
          $(".counter").text("8");
          $(".magic").addClass("animated bounceInLeft");
          $(".trophy").addClass("animated bounceInUp");
          return $(".users").addClass("animated bounceInRight");
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
