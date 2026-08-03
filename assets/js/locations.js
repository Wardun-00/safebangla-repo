const division = document.getElementById("division");
const district = document.getElementById("district");
const upazila = document.getElementById("upazila");

let locationData = {};

fetch("assets/data/location.json")
.then(response => response.json())
.then(data => {

    locationData = data;

    console.log("Location Loaded:", locationData);

})
.catch(error => {

    console.error("JSON Error:", error);

});


division.addEventListener("change", function () {

    district.innerHTML = `<option value="">Select District</option>`;
    upazila.innerHTML = `<option value="">Select Upazila</option>`;

    if (!locationData[this.value]) return;

    Object.keys(locationData[this.value]).forEach(item => {

        district.innerHTML += `
        <option value="${item}">
            ${item}
        </option>`;

    });

    // Hospital Filter Update
    if (typeof filterHospitals === "function") {

        filterHospitals();

    }

});

district.addEventListener("change", function () {

    upazila.innerHTML = `<option value="">Select Upazila</option>`;

    if (
        !locationData[division.value] ||
        !locationData[division.value][this.value]
    ) return;

    locationData[division.value][this.value].forEach(item => {

        upazila.innerHTML += `
        <option value="${item}">
            ${item}
        </option>`;

    });

    // Hospital Filter Update
    if (typeof filterHospitals === "function") {

        filterHospitals();

    }

});



