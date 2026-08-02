/* ==========================================
        NAVBAR
========================================== */

function initializeNavbar() {

    /* Mobile Menu */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

        });

    }


    /* Language Button */

    const languageBtn = document.getElementById("languageBtn");

    if (languageBtn) {

        languageBtn.addEventListener("click", () => {

            changeLanguage();

        });

    }


    /* Date & Time */

    updateDateTime();

    setInterval(updateDateTime, 1000);

}


/* ==========================================
        DATE & TIME
========================================== */

function updateDateTime() {

    const date = document.getElementById("currentDate");
    const time = document.getElementById("currentTime");

    if (!date || !time) return;

    const now = new Date();

    date.innerHTML = now.toLocaleDateString("en-GB", {

        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

    time.innerHTML = now.toLocaleTimeString();

}