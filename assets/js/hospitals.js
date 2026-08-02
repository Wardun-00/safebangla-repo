console.log("Hospital JS Loaded");

console.log(typeof hospitals);

console.log(hospitals);

console.log(typeof counter);

/* ==========================================
        HOSPITAL COUNTER
========================================== */

counter("totalHospital",850);

counter("emergencyHospital",410);

counter("doctorCounter",12000);

counter("districtCounter",64);


/* ==========================================
        LOAD HOSPITALS
========================================== */

const container = document.getElementById("hospitalContainer");
const hospitalCount = document.getElementById("hospitalCount");

function displayHospitals(list){

    if(!container || !hospitalCount) return;

    container.innerHTML="";

    hospitalCount.innerHTML=`${list.length} Hospitals`;

    if(list.length===0){

        container.innerHTML=`
            <div class="col-span-full text-center py-16">
                <h2 class="text-3xl font-bold text-red-600">
                    No Hospital Found
                </h2>

                <p class="text-gray-500 mt-3">
                    Try another Division, District or Hospital Name.
                </p>
            </div>
        `;

        return;
    }

    list.forEach(item => {

    container.innerHTML += `

    <div class="bg-white rounded-3xl shadow-lg border hover:shadow-2xl duration-300 overflow-hidden">

        <div class="bg-blue-600 text-white p-6">

            <h3 class="text-2xl font-bold">
                🏥 ${item.name}
            </h3>

        </div>

        <div class="p-6 space-y-3">

            <p>
                ⭐ ${item.rating}
            </p>

            <p>
                <strong>Division :</strong>
                ${item.division}
            </p>

            <p>
                <strong>District :</strong>
                ${item.district}
            </p>

            <p>
                <strong>Type :</strong>
                ${item.type}
            </p>

            <p>
                <strong>Emergency :</strong>
                ${item.emergency}
            </p>

            <p>
                <strong>Phone :</strong>
                ${item.phone}
            </p>

            <div class="grid grid-cols-2 gap-3 mt-6">

                <a
                    href="tel:${item.phone}"
                    class="bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl duration-300">

                    📞 Call

                </a>

                <button
                    class="detailsBtn bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl duration-300"
                    data-name="${item.name}">

                    Details

                </button>

            </div>

        </div>

    </div>

    `;

});

} // ← Function এখানেই শেষ

displayHospitals(hospitals);



/* ==========================================
        FILTER HOSPITAL
========================================== */

function filterHospitals() {

    // Get Input Values
    const division = document.getElementById("division").value;
    const district = document.getElementById("district").value;
    const hospitalType = document.getElementById("hospitalType").value;
    const keyword = document
        .getElementById("hospitalSearchInput")
        .value
        .trim()
        .toLowerCase();

    // Debug
    console.log("========== FILTER ==========");
    console.log("Division :", division);
    console.log("District :", district);
    console.log("Hospital Type :", hospitalType);
    console.log("Keyword :", keyword);
    console.log("Total Hospitals :", hospitals.length);

    console.log("========== ALL HOSPITALS ==========");
    console.table(hospitals);

    // Filter Hospital List
    const filtered = hospitals.filter(item => {

        const matchDivision =
            division === "" || item.division === division;

        const matchDistrict =
            district === "" || item.district === district;

        const matchType =
            hospitalType === "All" || item.type === hospitalType;

        const matchKeyword =
            item.name.toLowerCase().includes(keyword);

        return (
            matchDivision &&
            matchDistrict &&
            matchType &&
            matchKeyword
        );

    });

    console.log("========== FILTERED RESULT ==========");
    console.log(filtered);
    console.table(filtered);

    // Display Result
    displayHospitals(filtered);

}




/* ==========================================
        AUTO FILTER
========================================== */

const divisionSelect = document.getElementById("division");
const districtSelect = document.getElementById("district");
const hospitalTypeSelect = document.getElementById("hospitalType");
const hospitalSearchInput = document.getElementById("hospitalSearchInput");

if (divisionSelect) {

    divisionSelect.addEventListener("change", filterHospitals);

}

if (districtSelect) {

    districtSelect.addEventListener("change", filterHospitals);

}

if (hospitalTypeSelect) {

    hospitalTypeSelect.addEventListener("change", filterHospitals);

}

if (hospitalSearchInput) {

    hospitalSearchInput.addEventListener("input", filterHospitals);

}