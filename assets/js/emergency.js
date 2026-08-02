/* ==========================================
        HERO BUTTONS
========================================== */

const requestBtn = document.getElementById("requestBtn");

const trackBtn = document.getElementById("trackBtn");

const numberBtn = document.getElementById("numberBtn");

requestBtn?.addEventListener("click", () => {

    document
        .getElementById("requestForm")
        .scrollIntoView({

            behavior: "smooth"

        });

});

trackBtn?.addEventListener("click", () => {

    document
        .getElementById("trackSection")
        .scrollIntoView({

            behavior: "smooth"

        });

});

numberBtn?.addEventListener("click", () => {

    document
        .getElementById("emergencyNumbers")
        .scrollIntoView({

            behavior: "smooth"

        });

});













/* ===============================
    LOCATION BUTTON
================================ */

const gpsBtn = document.getElementById("gpsBtn");

gpsBtn?.addEventListener("click", () => {

    gpsBtn.innerHTML = "📍 Location Detected";

    gpsBtn.classList.remove("bg-green-600");

    gpsBtn.classList.add("bg-blue-600");

});



const nextLocation = document.getElementById("nextLocation");

nextLocation?.addEventListener("click", () => {

    alert("Location Saved Successfully");

});





/* ===================================
      Emergency Card
=================================== */

const cards = document.querySelectorAll(".emergency-card");
const selectedEmergency = document.getElementById("selectedEmergency");

cards.forEach(card => {

    card.addEventListener("click", () => {

        // আগের Active Card Remove
        cards.forEach(c => {

            c.classList.remove("active");

        });

        // নতুন Card Active
        card.classList.add("active");

        // Hidden Input-এ Value Save
        selectedEmergency.value = card.dataset.type;

        console.log(selectedEmergency.value);

        // AI Analysis
        runAIAnalysis(card.dataset.type);

    });

});

/* ==========================================
        APPLICANT INFORMATION
========================================== */

const statusCards = document.querySelectorAll(".status-card");
const nextAI = document.getElementById("nextAI");

let selectedStatus = "";

/* Status Card */

statusCards.forEach(card => {

    card.addEventListener("click", () => {

        statusCards.forEach(c => {

            c.classList.remove("bg-blue-600","text-white","border-blue-600");

        });

        card.classList.add("bg-blue-600","text-white","border-blue-600");

        selectedStatus = card.querySelector("input").value;

        card.querySelector("input").checked = true;

    });

});


/* Continue Button */

nextAI.addEventListener("click", () => {

    const fullName = document.getElementById("fullName").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const family = document.getElementById("family").value;

    if(fullName==""){

        alert("Please Enter Your Name");

        return;

    }

    if(phone.length!=11){

        alert("Enter Valid Mobile Number");

        return;

    }

    if(selectedStatus==""){

        alert("Select Current Situation");

        return;

    }

    alert("Applicant Information Saved Successfully ✅");

    document.getElementById("aiRecommendation").scrollIntoView({

        behavior:"smooth"

    });

});



/* ==========================================
        SUBMIT REQUEST
========================================== */

const submitBtn = document.getElementById("submitRequest");

submitBtn.addEventListener("click", () => {

    const fullName = document.getElementById("fullName").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const division = document.getElementById("division").value;

    const district = document.getElementById("district").value;

    const upazila = document.getElementById("upazila").value;

    const emergency = document.getElementById("selectedEmergency").value;

    if(fullName=="" || phone=="" || division=="" || district=="" || upazila=="" || emergency==""){

        alert("Please Complete All Required Information");

        return;

    }

    const trackingID="SB-"+Date.now();

    const request={

        trackingID,

        fullName,

        phone,

        division,

        district,

        upazila,

        emergency,

        status:"Pending",

        date:new Date().toLocaleString()

    };

    let requests=JSON.parse(localStorage.getItem("safeBanglaRequests")) || [];

    requests.push(request);

    localStorage.setItem("safeBanglaRequests",JSON.stringify(requests));

    alert(

`✅ Request Submitted Successfully

Tracking ID:
${trackingID}

Please save this Tracking ID.`

);

    window.location.href="dashboard.html";

});





function runAIAnalysis(emergency){

    const panel = document.getElementById("aiPanel");

    panel.classList.remove("hidden");

    const division = document.getElementById("division").value;
    const district = document.getElementById("district").value;

    const priority = document.getElementById("priorityBadge");
    const bar = document.getElementById("priorityBar");

    const hospital = document.getElementById("hospitalName");
    const fire = document.getElementById("fireStation");
    const police = document.getElementById("policeStation");
    const shelter = document.getElementById("shelterName");
    const phone = document.getElementById("emergencyPhone");

    const ambulance = document.getElementById("ambulanceNeed");
    const advice = document.getElementById("aiAdvice");
    const summary = document.getElementById("summaryText");


    /* ===============================
            Service Data
    =============================== */

    if(serviceData[division] && serviceData[division][district]){

        const service = serviceData[division][district];

        hospital.innerHTML = service.hospital;

        fire.innerHTML = service.fire;

        police.innerHTML = service.police;

        shelter.innerHTML = service.shelter;

        phone.innerHTML = service.phone;

    }else{

        hospital.innerHTML = "No Data";

        fire.innerHTML = "No Data";

        police.innerHTML = "No Data";

        shelter.innerHTML = "No Data";

        phone.innerHTML = "999";

    }


    /* ===============================
            AI Analysis
    =============================== */

    switch(emergency){

        case "Fire":

            priority.innerHTML="CRITICAL";

            priority.className="bg-red-600 text-white px-6 py-2 rounded-full";

            bar.style.width="100%";

            bar.className="bg-red-600 h-4 duration-700";

            ambulance.innerHTML="Required Immediately";

            advice.innerHTML="Evacuate immediately.";

            summary.innerHTML="Fire emergency detected. Fire Service and Ambulance have the highest priority.";

            break;


        case "Flood":

            priority.innerHTML="HIGH";

            priority.className="bg-blue-600 text-white px-6 py-2 rounded-full";

            bar.style.width="85%";

            bar.className="bg-blue-600 h-4 duration-700";

            ambulance.innerHTML="Required";

            advice.innerHTML="Move to a safe shelter.";

            summary.innerHTML="Flood emergency detected. Stay on higher ground and wait for rescue.";

            break;


        case "Medical":

            priority.innerHTML="MEDIUM";

            priority.className="bg-green-600 text-white px-6 py-2 rounded-full";

            bar.style.width="65%";

            bar.className="bg-green-600 h-4 duration-700";

            ambulance.innerHTML="Required";

            advice.innerHTML="Keep the patient stable.";

            summary.innerHTML="Medical emergency detected. Nearest hospital has been recommended.";

            break;


        case "Road Accident":

            priority.innerHTML="HIGH";

            priority.className="bg-orange-500 text-white px-6 py-2 rounded-full";

            bar.style.width="90%";

            bar.className="bg-orange-500 h-4 duration-700";

            ambulance.innerHTML="Urgent";

            advice.innerHTML="Do not move seriously injured victims.";

            summary.innerHTML="Road accident detected. Trauma care and emergency response are recommended.";

            break;

    }

}