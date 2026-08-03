/* ==========================================
        LOAD REQUEST DATA
========================================== */

const requests = JSON.parse(localStorage.getItem("safeBanglaRequests")) || [];

if (requests.length === 0) {

    console.log("No Request Found");

} else {

    const latest = requests[requests.length - 1];

    /* ===============================
            HERO
    ============================== */

    document.getElementById("trackingID").innerHTML =
        latest.trackingID;

    document.getElementById("dashboardEmergency").innerHTML =
        latest.emergency;

    document.getElementById("dashboardPriority").innerHTML =
        latest.priority;

    document.getElementById("dashboardDate").innerHTML =
        latest.date;

    /* ===============================
            REQUEST SUMMARY
    ============================== */

    document.getElementById("summaryName").innerHTML =
        latest.name;

    document.getElementById("summaryPhone").innerHTML =
        latest.phone;

    document.getElementById("summaryEmergency").innerHTML =
        latest.emergency;

    document.getElementById("summaryPriority").innerHTML =
        latest.priority;

    document.getElementById("summaryLocation").innerHTML =
        latest.division + " ➜ " +
        latest.district + " ➜ " +
        latest.upazila;

    document.getElementById("summaryDescription").innerHTML =
        latest.description;

    /* ===============================
            RESPONSE
    ============================== */

    document.getElementById("trackingCard").innerHTML =
        latest.trackingID;

}

/* ==========================================
        LIVE PROGRESS
========================================== */

setTimeout(() => {

    document.getElementById("progressBar").style.width = "45%";

    document.getElementById("step2Circle").className =
        "w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg";

    document.getElementById("step2Circle").innerHTML = "✓";

    document.getElementById("step3Circle").className =
        "w-12 h-12 bg-yellow-500 animate-pulse text-white rounded-full flex items-center justify-center mx-auto shadow-lg";

    document.getElementById("statusMessage").innerHTML = `

    <div class="flex items-center gap-4">

        <div class="text-5xl">🚑</div>

        <div>

            <h3 class="font-bold text-xl">

                Emergency Team Assigned

            </h3>

            <p class="text-gray-600 mt-2">

                The nearest emergency response team has been assigned and is preparing to respond.

            </p>

        </div>

    </div>

    `;

    document.getElementById("responseStatus").innerHTML =
        "Team Assigned";

}, 5000);



setTimeout(() => {

    document.getElementById("progressBar").style.width = "70%";

    document.getElementById("step3Circle").className =
        "w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg";

    document.getElementById("step3Circle").innerHTML = "✓";

    document.getElementById("step4Circle").className =
        "w-12 h-12 bg-yellow-500 animate-pulse text-white rounded-full flex items-center justify-center mx-auto shadow-lg";

    document.getElementById("statusMessage").innerHTML = `

    <div class="flex items-center gap-4">

        <div class="text-5xl">🚒</div>

        <div>

            <h3 class="font-bold text-xl">

                Response Team On The Way

            </h3>

            <p class="text-gray-600 mt-2">

                The emergency response team is travelling to your location.

            </p>

        </div>

    </div>

    `;

    document.getElementById("responseStatus").innerHTML =
        "On The Way";

}, 5000);



setTimeout(() => {

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("step4Circle").className =
        "w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg";

    document.getElementById("step4Circle").innerHTML = "✓";

    document.getElementById("step5Circle").className =
        "w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg";

    document.getElementById("step5Circle").innerHTML = "✓";

    document.getElementById("statusMessage").innerHTML = `

    <div class="flex items-center gap-4">

        <div class="text-5xl">✅</div>

        <div>

            <h3 class="font-bold text-xl">

                Emergency Response Completed

            </h3>

            <p class="text-gray-600 mt-2">

                Your emergency request has been completed successfully.

            </p>

        </div>

    </div>

    `;

    document.getElementById("responseStatus").innerHTML =
        "Completed";

}, 15000);

/* ==========================================
        RANDOM RESPONSE TIME
========================================== */

const arrivalTime =
document.getElementById("arrivalTime");

if(arrivalTime){

    const randomTime =
    Math.floor(Math.random()*8)+5;

    arrivalTime.innerHTML =
    randomTime+" Minutes";

}



/* ==========================================
        COPY TRACKING ID
========================================== */

const copyTracking =
document.getElementById("copyTracking");

if(copyTracking){

    copyTracking.addEventListener("click",()=>{

        const trackingID =
        document.getElementById("trackingCard").innerText;

        navigator.clipboard.writeText(trackingID);

        Swal.fire({

            icon:"success",

            title:"Tracking ID Copied",

            text:"Your Tracking ID has been copied successfully.",

            timer:1800,

            showConfirmButton:false

        });

    });

}



/* ==========================================
        VIEW MY REQUEST
========================================== */

const viewRequestBtn =
document.getElementById("viewRequestBtn");

if(viewRequestBtn){

    viewRequestBtn.addEventListener("click",()=>{

        document.getElementById("requestSummary")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}



/* ==========================================
        NO REQUEST FOUND
========================================== */

if(requests.length===0){

    document.querySelectorAll(".loading-data")
    .forEach(item=>{

        item.innerHTML="No Request Found";

    });

}



/* ==========================================
        CONSOLE
========================================== */

console.log("Dashboard Loaded Successfully");