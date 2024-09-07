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
