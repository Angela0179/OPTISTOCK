document.querySelector("menu-icon").addEventListener("click", function(){
    const menuLinks = document.querySelector("#menu-Links");
    const icon = document.querySelector("#bars");
    icon.classList.toggle("fa-xmark");
    menuLinks.classList.toggle("show");
})