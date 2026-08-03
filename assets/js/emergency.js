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







// ====================================
// ===================================





/* ==========================================
        PHONE VALIDATION
========================================== */

const phoneInput = document.getElementById("phone");
const phoneStatus = document.getElementById("phoneStatus");

phoneInput?.addEventListener("input", () => {

    const phone = phoneInput.value.trim();

    const regex = /^01[3-9]\d{8}$/;

    if (phone === "") {

        phoneStatus.innerHTML =
            "We will contact you using this number.";

        phoneStatus.className =
            "text-gray-500 mt-2 block";

        return;

    }

    if (regex.test(phone)) {

        phoneStatus.innerHTML =
            "✅ Valid Mobile Number";

        phoneStatus.className =
            "text-green-600 mt-2 block";

    }

    else {

        phoneStatus.innerHTML =
            "❌ Invalid Mobile Number";

        phoneStatus.className =
            "text-red-600 mt-2 block";

    }

});



/* ==========================================
        EMERGENCY CARD
========================================== */

const emergencyCards =
document.querySelectorAll(".emergency-card");

const selectedEmergency =
document.getElementById("selectedEmergency");

const selectedEmergencyText =
document.getElementById("selectedEmergencyText");

emergencyCards.forEach(card=>{

    card.addEventListener("click",()=>{

        emergencyCards.forEach(c=>{

            c.classList.remove("active");

            const icon =
            c.querySelector(".check-icon");

            if(icon){

                icon.classList.add("hidden");

            }

        });

        card.classList.add("active");

        const check =
        card.querySelector(".check-icon");

        if(check){

            check.classList.remove("hidden");

        }

        selectedEmergency.value =
        card.dataset.type;

        selectedEmergencyText.innerHTML =
        "🚨 "+card.dataset.type;

    });

});



/* ==========================================
        GPS BUTTON
========================================== */

const gpsBtn =
document.getElementById("gpsBtn");

gpsBtn?.addEventListener("click",()=>{

    gpsBtn.innerHTML=
    "📍 Current Location Detected";

    gpsBtn.classList.remove("bg-green-600");

    gpsBtn.classList.add("bg-blue-600");

});



/* ==========================================
        FORM SUBMIT
========================================== */

const emergencyForm =
document.getElementById("emergencyForm");

emergencyForm?.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
    document.getElementById("fullName").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const division =
    document.getElementById("division").value;

    const district =
    document.getElementById("district").value;

    const upazila =
    document.getElementById("upazila").value;

    const priority =
    document.getElementById("priority").value;

    const description =
    document.getElementById("description").value.trim();

    const agree =
    document.getElementById("agree").checked;

    const phoneRegex =
    /^01[3-9]\d{8}$/;

    if(name===""){

        Swal.fire({

            icon:"warning",

            title:"Full Name Required"

        });

        return;

    }

    if(!phoneRegex.test(phone)){

        Swal.fire({

            icon:"warning",

            title:"Enter a Valid Mobile Number"

        });

        return;

    }

    if(division===""){

        Swal.fire({

            icon:"warning",

            title:"Select Division"

        });

        return;

    }

    if(district===""){

        Swal.fire({

            icon:"warning",

            title:"Select District"

        });

        return;

    }

    if(upazila===""){

        Swal.fire({

            icon:"warning",

            title:"Select Upazila"

        });

        return;

    }

    if(selectedEmergency.value===""){

        Swal.fire({

            icon:"warning",

            title:"Select Emergency Type"

        });

        return;

    }

    if(priority===""){

        Swal.fire({

            icon:"warning",

            title:"Select Emergency Priority"

        });

        return;

    }

    if(description===""){

        Swal.fire({

            icon:"warning",

            title:"Please Describe the Emergency"

        });

        return;

    }

    if(!agree){

        Swal.fire({

            icon:"warning",

            title:"Please Accept the Declaration"

        });

        return;

    }



    /* ======================
            Tracking ID
    ====================== */

    const trackingID =
    "SB-"+Date.now();



    /* ======================
            Save LocalStorage
    ====================== */

    const request={

        trackingID,

        name,

        phone,

        division,

        district,

        upazila,

        emergency:selectedEmergency.value,

        priority,

        description,

        status:"Pending",

        date:new Date().toLocaleString()

    };

    let requests=
    JSON.parse(localStorage.getItem("safeBanglaRequests")) || [];

    requests.push(request);

    localStorage.setItem(

        "safeBanglaRequests",

        JSON.stringify(requests)

    );



    /* ======================
        Success Popup
    ====================== */

    Swal.fire({

        icon:"success",

        title:"Emergency Request Submitted",

        html:`

        <h3 style="color:#16a34a">

        🇧🇩 Government Emergency Command Center

        </h3>

        <br>

        <b>

        Tracking ID

        </b>

        <br>

        <span style="font-size:20px;color:#dc2626">

        ${trackingID}

        </span>

        <br><br>

        Your emergency request has been successfully received.

        <br><br>

        The nearest Government Emergency Response Team has been notified.

        <br><br>

        Please keep your mobile phone active.
        Our response team may contact you shortly.

        `,

        confirmButtonColor:"#16a34a",

        confirmButtonText:"OK"

    }).then(()=>{

        emergencyForm.reset();

        selectedEmergency.value="";

        selectedEmergencyText.innerHTML=
        "No Emergency Selected";

        emergencyCards.forEach(card=>{

            card.classList.remove("active");

            const icon=
            card.querySelector(".check-icon");

            if(icon){

                icon.classList.add("hidden");

            }

        });

        phoneStatus.innerHTML=
        "We will contact you using this number.";

        phoneStatus.className=
        "text-gray-500 mt-2 block";

    });

});