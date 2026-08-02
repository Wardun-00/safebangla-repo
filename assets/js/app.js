/* ==========================================
            MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


/* ==========================================
            LIVE DATE & TIME
========================================== */

function updateDateTime() {

    const currentDate = document.getElementById("currentDate");
    const currentTime = document.getElementById("currentTime");

    if (!currentDate || !currentTime) return;

    const now = new Date();

    const dateOptions = {

        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"

    };

    const timeOptions = {

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    };

    currentDate.textContent = now.toLocaleDateString("en-US", dateOptions);

    currentTime.textContent = now.toLocaleTimeString("en-US", timeOptions);

}

/* Run Only If Elements Exist */

if (document.getElementById("currentDate") && document.getElementById("currentTime")) {

    updateDateTime();

    setInterval(updateDateTime, 1000);

}


/* ==========================================
            LANGUAGE DATA
========================================== */

const language = {

    en: {

        logo: "SafeBangla",

        subtitle: "Smart Emergency Response Platform",

        home: "Home",

        emergency: "Emergency",

        hospital: "Hospitals",

        dashboard: "Dashboard",

        about: "About",

        contact: "Contact",

        request: "Request Help"

    },

    bn: {

        logo: "সেইফবাংলা",

        subtitle: "স্মার্ট জরুরি সেবা প্ল্যাটফর্ম",

        home: "হোম",

        emergency: "জরুরি সেবা",

        hospital: "হাসপাতাল",

        dashboard: "ড্যাশবোর্ড",

        about: "আমাদের সম্পর্কে",

        contact: "যোগাযোগ",

        request: "সাহায্য চাই"

    }

};



/* ==========================================
            LANGUAGE TOGGLE
========================================== */

let currentLanguage = "en";

const languageBtn = document.getElementById("languageBtn");
const languageText = document.getElementById("languageText");

if (languageBtn && languageText) {

    languageBtn.addEventListener("click", () => {

        currentLanguage = currentLanguage === "en" ? "bn" : "en";

        languageText.textContent =
            currentLanguage === "en" ? "বাংলা" : "English";

        document.querySelectorAll(".lang").forEach(item => {

            const key = item.dataset.key;

            if (language[currentLanguage][key]) {

                item.textContent = language[currentLanguage][key];

            }

        });

    });

}


/* ==========================================
        COPY EMERGENCY NUMBER
========================================== */

function copyNumber(number) {

    navigator.clipboard.writeText(number);

    alert("Copied : " + number);

}

/* ==========================================
            BACK TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.classList.remove("hidden");

        } else {

            topBtn.classList.add("hidden");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
/* ==========================================
      DASHBOARD LIVE TIME
========================================== */

const dashboardTime = document.getElementById("dashboardTime");

if (dashboardTime) {

    function updateDashboardTime() {

        const now = new Date();

        dashboardTime.innerHTML = now.toLocaleTimeString();

    }

    updateDashboardTime();

    setInterval(updateDashboardTime, 1000);

}

/* ==========================================
            COUNTER ANIMATION
========================================== */

function counter(id, target, speed = 20) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const increment = Math.ceil(target / 80);

    const timer = setInterval(() => {

        count += increment;

        if (count >= target) {

            count = target;

            clearInterval(timer);

        }

        element.innerHTML = count;

    }, speed);

}

counter("activeCounter",248);
counter("pendingCounter",96);
counter("completedCounter",1580);
counter("ambulanceCounter",142);
counter("hospitalCounter",312);
counter("rescueCounter",824);


function initializeNavbar(){

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click",()=>{

        mobileMenu.classList.toggle("hidden");

    });

}
}