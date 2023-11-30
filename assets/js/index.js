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
      navigation: false,
      loop: true,
      rewind: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      dots: false,
      margin: 0,
      smartSpeed: 450,
      // animateIn: "fadeIn",
      // animateOut: "fadeOut",
      navText: [
        "",
        "",
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
          items: 2,
          nav: true,
        },
        768: {
          items: 3,
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
      navigation: true,
      loop: true,
      rewind: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      dots: false,
      margin: 10,
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


  // $(document).ready(function () {
  //   // Function to handle hover events for dropdowns
  //   function handleHover() {
  //     $('.hover-dropdown').hover(
  //       function () {
  //         $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
  //       },
  //       function () {
  //         $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
  //       }
  //     );
  //   }

  //   // Initial setup
  //   handleHover();

  //   // Re-run the setup when the window is resized
  //   $(window).resize(function () {
  //     if ($(window).width() >= 768) {
  //       handleHover();
  //     } else {
  //       // Remove the hover effect for small screens
  //       $('.hover-dropdown').off('mouseenter mouseleave');
  //     }
  //   });
  // });


  $(function(){
    $(".dropdown-menu > li > a.trigger").on("click",function(e){
      var current=$(this).next();
      var grandparent=$(this).parent().parent();
      if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
        $(this).toggleClass('right-caret left-caret');
      grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
      grandparent.find(".sub-menu:visible").not(current).hide();
      current.toggle();
      e.stopPropagation();
    });
    $(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
      var root=$(this).closest('.dropdown');
      root.find('.left-caret').toggleClass('right-caret left-caret');
      root.find('.sub-menu:visible').hide();
    });
  });


  
const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let currentIndex = 0;

function showLightBox(index) {
  Array.from(galleryItem).forEach(item => {
    let imageIndex = item.getAttribute("data-index");
    if (parseInt(imageIndex) === index) {
      let imageLocation = item.children[0].getAttribute("src");
      lightBoxImg.setAttribute("src", imageLocation);
    }
  });
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  currentIndex = imageIndex;
  showLightBox(currentIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    currentIndex += n;
    if (currentIndex >= galleryItem.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = galleryItem.length - 1;
    }
    showLightBox(currentIndex);
}

function prevImage() {
    slideImage(-1);
}

function nextImage() {
    slideImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainer.addEventListener("click", closeLightBox);



const nav = document.querySelector(".Navbar");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("navbar-active");
  } else {
    nav.classList.remove("navbar-active");
  }
}


(function($){
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
  });
})(jQuery)

