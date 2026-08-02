/* ==========================================
        DASHBOARD
========================================== */

const table = document.getElementById("requestTable");

let requests = JSON.parse(localStorage.getItem("safeBanglaRequests")) || [];

function loadTable(data){

    table.innerHTML="";

    data.forEach((item,index)=>{

        table.innerHTML+=`

        <tr class="border-b hover:bg-gray-50">

            <td class="p-4">${item.trackingID}</td>

            <td class="p-4">${item.fullName}</td>

            <td class="p-4">${item.emergency}</td>

            <td class="p-4">

                ${item.district}

            </td>

            <td class="p-4">

                <span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                    ${item.status}

                </span>

            </td>

            <td class="p-4">

                <button

                onclick="viewRequest(${index})"

                class="bg-blue-600 text-white px-4 py-2 rounded-lg">

                    View

                </button>

            </td>

        </tr>

        `;

    });

}

loadTable(requests);



/* Search */

document.getElementById("searchInput")

.addEventListener("keyup",function(){

    const value=this.value.toLowerCase();

    const filter=requests.filter(item=>{

        return item.trackingID.toLowerCase().includes(value);

    });

    loadTable(filter);

});


/* View */

let currentIndex = null;

function viewRequest(index){

    currentIndex=index;

    const item=requests[index];

    document.getElementById("requestModal").classList.remove("hidden");

    document.getElementById("requestModal").classList.add("flex");

    document.getElementById("mTracking").innerHTML=item.trackingID;

    document.getElementById("mName").innerHTML=item.fullName;

    document.getElementById("mPhone").innerHTML=item.phone;

    document.getElementById("mEmergency").innerHTML=item.emergency;

    document.getElementById("mLocation").innerHTML=

    item.division+" / "+item.district+" / "+item.upazila;

    document.getElementById("mStatus").innerHTML=item.status;

}

/* Close */

document.getElementById("closeModal")

.addEventListener("click",()=>{

document.getElementById("requestModal")

.classList.add("hidden");

document.getElementById("requestModal")

.classList.remove("flex");

});


/* Approve */

document.getElementById("approveBtn")

.addEventListener("click",()=>{

requests[currentIndex].status="Approved";

localStorage.setItem(
"safeBanglaRequests",
JSON.stringify(requests)
);

loadTable(requests);

updateStatistics();

document.getElementById("closeModal").click();

});


/* Reject */

document.getElementById("rejectBtn")

.addEventListener("click",()=>{

requests[currentIndex].status="Rejected";

localStorage.setItem(
"safeBanglaRequests",
JSON.stringify(requests)
);

loadTable(requests);

updateStatistics();

document.getElementById("closeModal").click();

});


/* Print */

document.getElementById("printBtn")

.addEventListener("click",()=>{

window.print();

});



/* ==========================================
        DASHBOARD STATISTICS
========================================== */

function updateStatistics(){

    const total=requests.length;

    const pending=requests.filter(item=>item.status=="Pending").length;

    const approved=requests.filter(item=>item.status=="Approved").length;

    const rejected=requests.filter(item=>item.status=="Rejected").length;

    document.getElementById("totalRequest").innerHTML=total;

    document.getElementById("pendingRequest").innerHTML=pending;

    document.getElementById("approvedRequest").innerHTML=approved;

    document.getElementById("rejectedRequest").innerHTML=rejected;

}