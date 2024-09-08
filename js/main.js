const menuOpen = document.querySelector(".ri-menu-5-line")
const menuClose = document.querySelector(".ri-close-circle-line")
const menu = document.querySelector("nav ul")
const menuLinks = document.querySelectorAll("nav ul li")


menuOpen.addEventListener("click", function(){
    menu.style.top = "32%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})

menuClose.addEventListener("click", function(){
    menu.style.top = "-32%"
    menuClose.style.display = "none"
    menuOpen.style.display = "block"
})

menuLinks.forEach(function(link){
    link.addEventListener("click", function(){
        menu.style.top = "-32%"
        menuClose.style.display = "none"
        menuOpen.style.display = "block"
    })  
})

// alert("WELCOME!")
// alert("Hi again!")


$(".testimonials").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    arrows: true,
    nav: false,
    // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
  