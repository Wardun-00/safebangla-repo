


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
    request: "Request Help",

    ambulance: "Ambulance",
    police: "Police",
    fire_service: "Fire Service",
    blood_bank: "Blood Bank",
    first_aid: "First Aid",
    helpline: "Helpline",
    emergency_services: "Emergency Services",
select_emergency: "Select Your Emergency",
select_emergency_desc: "Choose the emergency type to instantly request the appropriate government support.",

citizen_services: "Government / Citizen Services",
citizen_services_desc: "Government & Public Support Services",

flood: "Flood",
flood_desc: "Flood Rescue Support",

fire: "Fire",
fire_desc: "Fire Service Request",

earthquake: "Earthquake",
earthquake_desc: "Earthquake Assistance",

cyclone: "Cyclone",
cyclone_desc: "Cyclone Emergency",

building_collapse: "Building Collapse",
building_collapse_desc: "Structural Rescue",

road_accident: "Road Accident",
road_accident_desc: "Ambulance Support",

medical: "Medical",
medical_desc: "Emergency Treatment",

others: "Others",
others_desc: "Other Emergencies",



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
    request: "সাহায্য চাই",

    ambulance: "অ্যাম্বুলেন্স",
    police: "পুলিশ",
    fire_service: "ফায়ার সার্ভিস",
    blood_bank: "রক্ত ব্যাংক",
    first_aid: "প্রাথমিক চিকিৎসা",
    helpline: "হেল্পলাইন",

emergency_services: "জরুরি সেবা",
select_emergency: "আপনার জরুরি সেবা নির্বাচন করুন",
select_emergency_desc: "দ্রুত সরকারি সহায়তা পাওয়ার জন্য জরুরি সেবার ধরন নির্বাচন করুন।",

citizen_services: "সরকার / নাগরিক সেবা",
citizen_services_desc: "সরকারি এবং জনসম্প্রদায়ের সমর্থন সেবা",

flood: "বন্যা",
flood_desc: "বন্যা উদ্ধার সহায়তা",

fire: "অগ্নিকাণ্ড",
fire_desc: "ফায়ার সার্ভিসের সহায়তা",

earthquake: "ভূমিকম্প",
earthquake_desc: "ভূমিকম্প সহায়তা",

cyclone: "ঘূর্ণিঝড়",
cyclone_desc: "ঘূর্ণিঝড় জরুরি সহায়তা",

building_collapse: "ভবন ধস",
building_collapse_desc: "কাঠামোগত উদ্ধার",

road_accident: "সড়ক দুর্ঘটনা",
road_accident_desc: "অ্যাম্বুলেন্স সহায়তা",

medical: "চিকিৎসা",
medical_desc: "জরুরি চিকিৎসা",

others: "অন্যান্য",
others_desc: "অন্যান্য জরুরি সেবা",

}

};



/* ==========================================
            LANGUAGE TOGGLE
========================================== */

let currentLanguage = localStorage.getItem("language") || "en";

const languageBtn = document.getElementById("languageBtn");
const languageText = document.getElementById("languageText");

function changeLanguage(lang) {

    document.querySelectorAll(".lang").forEach(item => {

        const key = item.dataset.key;

        if (language[lang] && language[lang][key]) {
            item.textContent = language[lang][key];
        }

    });

    languageText.textContent = lang === "en" ? "বাংলা" : "English";

    localStorage.setItem("language", lang);
}

// Page Load হলে Language Apply হবে
changeLanguage(currentLanguage);

// Button Click
if (languageBtn) {

    languageBtn.addEventListener("click", () => {

        currentLanguage = currentLanguage === "en" ? "bn" : "en";

        changeLanguage(currentLanguage);

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


function initializeNavbar() {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

        });

    }

}

/* ==========================================
        INITIALIZE
========================================== */

initializeNavbar();