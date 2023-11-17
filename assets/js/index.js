$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });
  
  
  $(document).ready(function () {
    var owl = $(".owl");
    owl.owlCarousel({
      items: 7,
      navigation: true,
      loop: true,
      rewind: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      dots: false,
      margin: 20,
      smartSpeed: 450,
      // animateIn: "fadeIn",
      // animateOut: "fadeOut",
      navText: [
        "<i class='fas fa-chevron-left nav-left'></i>",
        "<i class='fas fa-chevron-right nav-right'></i>",
      ],
      responsiveClass: true,
      responsive: {
        200: {
          items: 1,
          nav: true,
        },
        350: {
          items: 1,
          nav: true,
        },
        380: {
          items: 1,
          nav: true,
        },
        400: {
          items: 1,
          nav: true,
        },
        768: {
          items: 2,
          nav: true,
        },
        990: {
          items: 3,
          nav: true,
        },
        1200: {
          items: 5,
          nav: true
        },
        1600: {
          items: 6,
          nav: true
        },
  
      },
    });
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [5000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
  });


  $(document).ready(function () {
    var owl = $(".owl2");
    owl.owlCarousel({
      items: 3,
      navigation: false,
      loop: true,
      rewind: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      dots: true,
      margin: 10,
      smartSpeed: 450,
      // animateIn: "fadeIn",
      // animateOut: "fadeOut",
      responsiveClass: true,
      responsive: {
        200: {
          items: 1,
          nav: true,
        },
        350: {
          items: 1,
          nav: true,
        },
        380: {
          items: 1,
          nav: true,
        },
        400: {
          items: 1,
          nav: true,
        },
        768: {
          items: 2,
          nav: true,
        },
        990: {
          items: 2,
          nav: true,
        },
        1200: {
          items: 3,
          nav: true
        },
        1600: {
          items: 3,
          nav: true
        },
  
      },
    });
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [5000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
  });