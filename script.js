//js for a responsive menu links//
document.querySelector(".menu-icon").addEventListener("click", function(){
    const menuLinks = document.querySelector("#menu-links");
    const icon = document.querySelector("#bars");
    icon.classList.toggle("fa-xmark");
    menuLinks.classList.add(".show")
})

//script for an active nav bar
document.addEventListener("DOMContentLoaded", function(){
    let currentLocation = window.location.href;
    let menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(item => {
        if (item.href === currentLocation){
            item.classList.add("active")
        }
    })
})