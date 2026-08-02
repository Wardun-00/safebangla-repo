async function loadComponents() {

    const navbar = document.querySelector("sb-navbar");

    if (navbar) {

        const response = await fetch("components/navbar.html");

        navbar.innerHTML = await response.text();

        initializeNavbar();

    }

    const footer = document.querySelector("sb-footer");

    if (footer) {

        const response = await fetch("components/footer.html");

        footer.innerHTML = await response.text();

    }

}

document.addEventListener("DOMContentLoaded", loadComponents);