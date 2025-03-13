document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.createElement("div");
    menuIcon.classList.add("menu-icon");
    menuIcon.innerHTML = "&#9776;"; // Hamburger icon

    const navbar = document.querySelector(".navbar");
    const navbarMenu = document.querySelector(".navbar ul");

    // Add menu icon to navbar
    navbar.appendChild(menuIcon);

    menuIcon.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
    });
});
