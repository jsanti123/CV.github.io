const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("main-nav");

menuToggle.addEventListener("click", function() {
    navList.classList.toggle("active");
});
