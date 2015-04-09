(function() {
  $(function() {
    $("#fullpage").fullpage({
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
      slidesColor: ["#FFFAFA", "#eef2f2 ", "#FFFAFA", "#eef2f2 ", "#FFFAFA"],
      slidesNavigation: true,
      scrollingSpeed: 800,
      keyboardScrolling: true,
      touchSensitivity: 10,
      continuousVertical: false,
      animateAnchor: true,
      afterLoad: function(anchorLink) {
        if (anchorLink === "thirdPage") {
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
