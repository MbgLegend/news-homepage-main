const menuOpen = document.querySelector("nav .icon-menu")
const menuClose = document.querySelector("nav ul .menu-hide img")
const menu = document.querySelector("nav ul")

function oepnNavMenu(){
    menu.classList.add("active")
}

function closeNavMenu(){
    menu.classList.remove("active")
}

menuOpen.addEventListener("click", oepnNavMenu)
menuClose.addEventListener("click", closeNavMenu)
window.onresize = closeNavMenu