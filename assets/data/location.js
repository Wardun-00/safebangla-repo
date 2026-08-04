/* ==========================================
        BANGLADESH LOCATION
========================================== */

const divisionSelect = document.getElementById("division");
const districtSelect = document.getElementById("district");
const upazilaSelect = document.getElementById("upazila");

if (divisionSelect && districtSelect && upazilaSelect) {

    fetch("assets/data/location.json")

        .then(response => response.json())

        .then(data => {

          // Division Load

divisionSelect.innerHTML = `
    <option value="">Select Division</option>
`;

Object.keys(data).forEach(division => {

    divisionSelect.innerHTML += `
        <option value="${division}">
            ${division}
        </option>
    `;

});

            // Division Change

          // Division Change

// Division Change

divisionSelect.addEventListener("change", () => {

    districtSelect.innerHTML =
        '<option value="">Select District</option>';

    upazilaSelect.innerHTML =
        '<option value="">Select Upazila</option>';

    const selectedDivision = divisionSelect.value;

    if (!selectedDivision) return;

    const districts = Object.keys(data[selectedDivision]);

    districts.forEach(district => {

        const option = document.createElement("option");

        option.value = district;
        option.textContent = district;

        districtSelect.appendChild(option);

    });

});
            // District Change

            districtSelect.addEventListener("change", () => {

                upazilaSelect.innerHTML =
                    `<option value="">Select Upazila</option>`;

                const selectedDivision =
                    divisionSelect.value;

                const selectedDistrict =
                    districtSelect.value;

                if (!selectedDistrict) return;

                data[selectedDivision][selectedDistrict].forEach(upazila => {

                    upazilaSelect.innerHTML += `
                        <option value="${upazila}">
                            ${upazila}
                        </option>
                    `;

                });

            });

        })

        .catch(error => {

            console.error("Location JSON Load Error:", error);

        });

}


/* ==========================================
        CITIZEN LOCATION
========================================== */

const division = document.getElementById("citizenDivision");
const district = document.getElementById("citizenDistrict");
const upazila = document.getElementById("citizenUpazila");

if (division && district && upazila) {

    fetch("assets/data/location.json") // তোমার JSON path অনুযায়ী দিও
        .then(res => res.json())
        .then(data => {

            // Division Load
            Object.keys(data).forEach(div => {

                const option = document.createElement("option");
                option.value = div;
                option.textContent = div;

                division.appendChild(option);

            });

            // District Load
            division.addEventListener("change", () => {

                district.innerHTML =
                    '<option value="">Select District</option>';

                upazila.innerHTML =
                    '<option value="">Select Upazila</option>';

                const selectedDivision = division.value;

                if (!selectedDivision) return;

                Object.keys(data[selectedDivision]).forEach(dist => {

                    const option = document.createElement("option");

                    option.value = dist;

                    option.textContent = dist;

                    district.appendChild(option);

                });

            });

            // Upazila Load
            district.addEventListener("change", () => {

                upazila.innerHTML =
                    '<option value="">Select Upazila</option>';

                const selectedDivision = division.value;
                const selectedDistrict = district.value;

                if (!selectedDistrict) return;

                data[selectedDivision][selectedDistrict].forEach(upa => {

                    const option = document.createElement("option");

                    option.value = upa;

                    option.textContent = upa;

                    upazila.appendChild(option);

                });

            });

        })

        .catch(error => {

            console.error("Location JSON Error:", error);

        });

}





/* ==========================================
        DETECT CURRENT LOCATION
========================================== */

const detectLocationBtn =
document.getElementById("detectLocationBtn");

const currentLocation =
document.getElementById("currentLocation");

if (detectLocationBtn && currentLocation) {

    detectLocationBtn.addEventListener("click", () => {

        if (!navigator.geolocation) {

            Swal.fire({

                icon: "error",

                title: "Geolocation Not Supported"

            });

            return;

        }

        detectLocationBtn.disabled = true;

        detectLocationBtn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin me-2"></i>Detecting...';

        navigator.geolocation.getCurrentPosition(

            (position) => {

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                currentLocation.value =
                `Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}`;

                detectLocationBtn.innerHTML =
                '<i class="fa-solid fa-circle-check me-2"></i>Location Detected';

                detectLocationBtn.classList.remove("bg-green-600");

                detectLocationBtn.classList.add("bg-blue-600");

            },

        
            (error) => {

    console.log(error);

    Swal.fire({

        icon: "error",

        title: "Location Error",

        html: `
            <b>Error Code:</b> ${error.code}<br><br>
            <b>Message:</b><br>${error.message}
        `

    });

    detectLocationBtn.disabled = false;

    detectLocationBtn.innerHTML =
    '<i class="fa-solid fa-location-crosshairs me-2"></i>Detect Current Location';

}











        );

    });

}