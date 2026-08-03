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



/* ==========================================
        DETECT CURRENT LOCATION
========================================== */

const detectBtn = document.getElementById("detectLocation");
const locationResult = document.getElementById("locationResult");

if (detectBtn && locationResult) {

    detectBtn.addEventListener("click", () => {

        if (!navigator.geolocation) {

            alert("Geolocation is not supported by your browser.");

            return;

        }

        locationResult.value = "Detecting location...";

        navigator.geolocation.getCurrentPosition(

            (position) => {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                locationResult.value =
                    `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`;

            },

            (error) => {

                locationResult.value = "Unable to detect location.";

                console.error(error);

            }

        );

    });

}