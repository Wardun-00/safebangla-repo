/* ==========================================
        HOSPITAL DATABASE
========================================== */

const hospitals = [

/* ==========================================
        DHAKA DIVISION
========================================== */

{
    name: "Dhaka Medical College Hospital",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Shahbag",
    address: "Secretariat Road, Shahbag, Dhaka-1000",
    phone: "999",
    ambulance: "01714001100",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "2600+",
    website: "https://dmc.gov.bd",
    map: "https://maps.google.com/?q=Dhaka+Medical+College+Hospital"
},

{
    name: "Sir Salimullah Medical College Mitford Hospital",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Kotwali",
    address: "Mitford Road, Old Dhaka",
    phone: "999",
    ambulance: "01714001101",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "800+",
    website: "",
    map: "https://maps.google.com/?q=Mitford+Hospital"
},

{
    name: "Mugda Medical College Hospital",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Mugda",
    address: "Mugda, Dhaka",
    phone: "999",
    ambulance: "01714001102",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "500+",
    website: "",
    map: "https://maps.google.com/?q=Mugda+Medical+College+Hospital"
},

{
    name: "Kurmitola General Hospital",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Cantonment",
    address: "Airport Road, Dhaka",
    phone: "999",
    ambulance: "01714001103",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "500+",
    website: "",
    map: "https://maps.google.com/?q=Kurmitola+General+Hospital"
},

{
    name: "National Institute of Traumatology & Orthopedic Rehabilitation (NITOR)",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Sher-e-Bangla Nagar",
    address: "Agargaon, Dhaka",
    phone: "999",
    ambulance: "01714001104",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "1000+",
    website: "",
    map: "https://maps.google.com/?q=NITOR+Dhaka"
},

{
    name: "Bangabandhu Sheikh Mujib Medical University (BSMMU)",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Shahbag",
    address: "Shahbag, Dhaka",
    phone: "999",
    ambulance: "01714001105",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "1500+",
    website: "https://bsmmu.edu.bd",
    map: "https://maps.google.com/?q=BSMMU"
},

{
    name: "Shaheed Suhrawardy Medical College Hospital",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Sher-e-Bangla Nagar",
    address: "Sher-e-Bangla Nagar, Dhaka",
    phone: "999",
    ambulance: "01714001106",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "900+",
    website: "",
    map: "https://maps.google.com/?q=Shaheed+Suhrawardy+Medical+College+Hospital"
},

{
    name: "Square Hospital",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Panthapath",
    address: "18/F Bir Uttam Qazi Nuruzzaman Road, Panthapath",
    phone: "10616",
    ambulance: "10616",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★★",
    beds: "400+",
    website: "https://www.squarehospital.com",
    map: "https://maps.google.com/?q=Square+Hospital"
},

{
    name: "Evercare Hospital Dhaka",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Bashundhara",
    address: "Plot-81, Block-E, Bashundhara R/A",
    phone: "10678",
    ambulance: "10678",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★★",
    beds: "425+",
    website: "https://www.evercarebd.com",
    map: "https://maps.google.com/?q=Evercare+Hospital+Dhaka"
},

{
    name: "United Hospital",
    division: "Dhaka",
    district: "Dhaka",
    upazila: "Gulshan",
    address: "United City, Madani Avenue, Gulshan",
    phone: "10666",
    ambulance: "10666",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★★",
    beds: "450+",
    website: "https://www.uhlbd.com",
    map: "https://maps.google.com/?q=United+Hospital+Dhaka"
},

/* ==========================================
        DHAKA DIVISION (PART-2)
========================================== */

{
    name: "Shaheed Tajuddin Ahmad Medical College Hospital",
    division: "Dhaka",
    district: "Gazipur",
    upazila: "Gazipur Sadar",
    address: "Gazipur Sadar, Gazipur",
    phone: "999",
    ambulance: "01714001107",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "500+",
    website: "",
    map: "https://maps.google.com/?q=Shaheed+Tajuddin+Ahmad+Medical+College+Hospital"
},

{
    name: "Gazipur Shaheed Ahsan Ullah Master General Hospital",
    division: "Dhaka",
    district: "Gazipur",
    upazila: "Gazipur Sadar",
    address: "Gazipur Sadar, Gazipur",
    phone: "999",
    ambulance: "01714001108",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Gazipur+General+Hospital"
},

{
    name: "250 Bed General Hospital",
    division: "Dhaka",
    district: "Narayanganj",
    upazila: "Narayanganj Sadar",
    address: "Narayanganj Sadar, Narayanganj",
    phone: "999",
    ambulance: "01714001109",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Narayanganj+250+Bed+General+Hospital"
},

{
    name: "Faridpur Medical College Hospital",
    division: "Dhaka",
    district: "Faridpur",
    upazila: "Faridpur Sadar",
    address: "Faridpur Sadar, Faridpur",
    phone: "999",
    ambulance: "01714001110",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "500+",
    website: "",
    map: "https://maps.google.com/?q=Faridpur+Medical+College+Hospital"
},

{
    name: "Gopalganj General Hospital",
    division: "Dhaka",
    district: "Gopalganj",
    upazila: "Gopalganj Sadar",
    address: "Gopalganj Sadar, Gopalganj",
    phone: "999",
    ambulance: "01714001111",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Gopalganj+General+Hospital"
},

{
    name: "Kishoreganj General Hospital",
    division: "Dhaka",
    district: "Kishoreganj",
    upazila: "Kishoreganj Sadar",
    address: "Kishoreganj Sadar, Kishoreganj",
    phone: "999",
    ambulance: "01714001112",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Kishoreganj+General+Hospital"
},

{
    name: "Tangail General Hospital",
    division: "Dhaka",
    district: "Tangail",
    upazila: "Tangail Sadar",
    address: "Tangail Sadar, Tangail",
    phone: "999",
    ambulance: "01714001113",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Tangail+General+Hospital"
},

{
    name: "Manikganj General Hospital",
    division: "Dhaka",
    district: "Manikganj",
    upazila: "Manikganj Sadar",
    address: "Manikganj Sadar, Manikganj",
    phone: "999",
    ambulance: "01714001114",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Manikganj+General+Hospital"
},

{
    name: "Munshiganj General Hospital",
    division: "Dhaka",
    district: "Munshiganj",
    upazila: "Munshiganj Sadar",
    address: "Munshiganj Sadar, Munshiganj",
    phone: "999",
    ambulance: "01714001115",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Munshiganj+General+Hospital"
},

{
    name: "Narsingdi District Hospital",
    division: "Dhaka",
    district: "Narsingdi",
    upazila: "Narsingdi Sadar",
    address: "Narsingdi Sadar, Narsingdi",
    phone: "999",
    ambulance: "01714001116",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Narsingdi+District+Hospital"
},

{
    name: "Rajbari District Hospital",
    division: "Dhaka",
    district: "Rajbari",
    upazila: "Rajbari Sadar",
    address: "Rajbari Sadar, Rajbari",
    phone: "999",
    ambulance: "01714001117",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Rajbari+District+Hospital"
},

{
    name: "Shariatpur District Hospital",
    division: "Dhaka",
    district: "Shariatpur",
    upazila: "Shariatpur Sadar",
    address: "Shariatpur Sadar, Shariatpur",
    phone: "999",
    ambulance: "01714001118",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Shariatpur+District+Hospital"
},

{
    name: "Madaripur District Hospital",
    division: "Dhaka",
    district: "Madaripur",
    upazila: "Madaripur Sadar",
    address: "Madaripur Sadar, Madaripur",
    phone: "999",
    ambulance: "01714001119",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Madaripur+District+Hospital"
},

/* ==========================================
        CHATTOGRAM DIVISION
========================================== */

{
    name: "Chattogram Medical College Hospital",
    division: "Chattogram",
    district: "Chattogram",
    upazila: "Panchlaish",
    address: "Panchlaish, Chattogram",
    phone: "999",
    ambulance: "01714002001",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "1313+",
    website: "",
    map: "https://maps.google.com/?q=Chattogram+Medical+College+Hospital"
},

{
    name: "Chattogram General Hospital",
    division: "Chattogram",
    district: "Chattogram",
    upazila: "Anderkilla",
    address: "Anderkilla, Chattogram",
    phone: "999",
    ambulance: "01714002002",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Chattogram+General+Hospital"
},

{
    name: "Parkview Hospital",
    division: "Chattogram",
    district: "Chattogram",
    upazila: "Panchlaish",
    address: "Panchlaish, Chattogram",
    phone: "10615",
    ambulance: "10615",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★★",
    beds: "300+",
    website: "https://parkviewhospitalbd.com",
    map: "https://maps.google.com/?q=Parkview+Hospital+Chattogram"
},

{
    name: "Chevron Clinical Laboratory & Hospital",
    division: "Chattogram",
    district: "Chattogram",
    upazila: "Panchlaish",
    address: "Panchlaish, Chattogram",
    phone: "031654321",
    ambulance: "01714002003",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★☆",
    beds: "200+",
    website: "",
    map: "https://maps.google.com/?q=Chevron+Hospital+Chattogram"
},

{
    name: "Cumilla Medical College Hospital",
    division: "Chattogram",
    district: "Cumilla",
    upazila: "Cumilla Sadar",
    address: "Cumilla Sadar, Cumilla",
    phone: "999",
    ambulance: "01714002004",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "500+",
    website: "",
    map: "https://maps.google.com/?q=Cumilla+Medical+College+Hospital"
},

{
    name: "Cumilla General Hospital",
    division: "Chattogram",
    district: "Cumilla",
    upazila: "Cumilla Sadar",
    address: "Cumilla Sadar, Cumilla",
    phone: "999",
    ambulance: "01714002005",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Cumilla+General+Hospital"
},

{
    name: "Cox's Bazar District Sadar Hospital",
    division: "Chattogram",
    district: "Cox's Bazar",
    upazila: "Cox's Bazar Sadar",
    address: "Cox's Bazar Sadar",
    phone: "999",
    ambulance: "01714002006",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Cox's+Bazar+District+Hospital"
},

{
    name: "Noakhali General Hospital",
    division: "Chattogram",
    district: "Noakhali",
    upazila: "Maijdee",
    address: "Maijdee, Noakhali",
    phone: "999",
    ambulance: "01714002007",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Noakhali+General+Hospital"
},

{
    name: "Feni General Hospital",
    division: "Chattogram",
    district: "Feni",
    upazila: "Feni Sadar",
    address: "Feni Sadar",
    phone: "999",
    ambulance: "01714002008",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Feni+General+Hospital"
},

{
    name: "Brahmanbaria General Hospital",
    division: "Chattogram",
    district: "Brahmanbaria",
    upazila: "Brahmanbaria Sadar",
    address: "Brahmanbaria Sadar",
    phone: "999",
    ambulance: "01714002009",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Brahmanbaria+General+Hospital"
},

/* ==========================================
        CHATTOGRAM DIVISION (PART-2)
========================================== */

{
    name: "Chandpur General Hospital",
    division: "Chattogram",
    district: "Chandpur",
    upazila: "Chandpur Sadar",
    address: "Chandpur Sadar, Chandpur",
    phone: "999",
    ambulance: "01714002010",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Chandpur+General+Hospital"
},

{
    name: "Lakshmipur General Hospital",
    division: "Chattogram",
    district: "Lakshmipur",
    upazila: "Lakshmipur Sadar",
    address: "Lakshmipur Sadar, Lakshmipur",
    phone: "999",
    ambulance: "01714002011",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Lakshmipur+General+Hospital"
},

{
    name: "Rangamati General Hospital",
    division: "Chattogram",
    district: "Rangamati",
    upazila: "Rangamati Sadar",
    address: "Rangamati Sadar, Rangamati",
    phone: "999",
    ambulance: "01714002012",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Rangamati+General+Hospital"
},

{
    name: "Khagrachhari District Hospital",
    division: "Chattogram",
    district: "Khagrachhari",
    upazila: "Khagrachhari Sadar",
    address: "Khagrachhari Sadar",
    phone: "999",
    ambulance: "01714002013",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Khagrachhari+District+Hospital"
},

{
    name: "Bandarban District Hospital",
    division: "Chattogram",
    district: "Bandarban",
    upazila: "Bandarban Sadar",
    address: "Bandarban Sadar",
    phone: "999",
    ambulance: "01714002014",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Bandarban+District+Hospital"
},

/* ==========================================
        RAJSHAHI DIVISION
========================================== */

{
    name: "Rajshahi Medical College Hospital",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Boalia",
    address: "Laxmipur, Rajshahi",
    phone: "999",
    ambulance: "01714003001",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "1200+",
    website: "",
    map: "https://maps.google.com/?q=Rajshahi+Medical+College+Hospital"
},

{
    name: "Rajshahi General Hospital",
    division: "Rajshahi",
    district: "Rajshahi",
    upazila: "Boalia",
    address: "Rajshahi Sadar",
    phone: "999",
    ambulance: "01714003002",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Rajshahi+General+Hospital"
},

{
    name: "Naogaon District Hospital",
    division: "Rajshahi",
    district: "Naogaon",
    upazila: "Naogaon Sadar",
    address: "Naogaon Sadar",
    phone: "999",
    ambulance: "01714003003",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Naogaon+District+Hospital"
},

{
    name: "Natore District Hospital",
    division: "Rajshahi",
    district: "Natore",
    upazila: "Natore Sadar",
    address: "Natore Sadar",
    phone: "999",
    ambulance: "01714003004",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Natore+District+Hospital"
},

{
    name: "Pabna General Hospital",
    division: "Rajshahi",
    district: "Pabna",
    upazila: "Pabna Sadar",
    address: "Pabna Sadar",
    phone: "999",
    ambulance: "01714003005",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Pabna+General+Hospital"
},
/* ==========================================
        RAJSHAHI DIVISION (PART-2)
========================================== */

{
    name: "Shaheed Ziaur Rahman Medical College Hospital",
    division: "Rajshahi",
    district: "Bogura",
    upazila: "Bogura Sadar",
    address: "Bogura Sadar, Bogura",
    phone: "999",
    ambulance: "01714003006",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "500+",
    website: "",
    map: "https://maps.google.com/?q=SZMC+Bogura"
},

{
    name: "Bogura Mohammad Ali Hospital",
    division: "Rajshahi",
    district: "Bogura",
    upazila: "Bogura Sadar",
    address: "Bogura Sadar",
    phone: "999",
    ambulance: "01714003007",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Mohammad+Ali+Hospital+Bogura"
},

{
    name: "Chapai Nawabganj District Hospital",
    division: "Rajshahi",
    district: "Chapai Nawabganj",
    upazila: "Chapai Nawabganj Sadar",
    address: "Chapai Nawabganj Sadar",
    phone: "999",
    ambulance: "01714003008",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Chapai+Nawabganj+District+Hospital"
},

{
    name: "Joypurhat District Hospital",
    division: "Rajshahi",
    district: "Joypurhat",
    upazila: "Joypurhat Sadar",
    address: "Joypurhat Sadar",
    phone: "999",
    ambulance: "01714003009",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Joypurhat+District+Hospital"
},

{
    name: "Sirajganj General Hospital",
    division: "Rajshahi",
    district: "Sirajganj",
    upazila: "Sirajganj Sadar",
    address: "Sirajganj Sadar",
    phone: "999",
    ambulance: "01714003010",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Sirajganj+General+Hospital"
},

/* ==========================================
        KHULNA DIVISION
========================================== */

{
    name: "Khulna Medical College Hospital",
    division: "Khulna",
    district: "Khulna",
    upazila: "Khulna Sadar",
    address: "Khulna Sadar, Khulna",
    phone: "999",
    ambulance: "01714004001",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "800+",
    website: "",
    map: "https://maps.google.com/?q=Khulna+Medical+College+Hospital"
},

{
    name: "Khulna General Hospital",
    division: "Khulna",
    district: "Khulna",
    upazila: "Khulna Sadar",
    address: "Khulna Sadar",
    phone: "999",
    ambulance: "01714004002",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Khulna+General+Hospital"
},

{
    name: "Jashore General Hospital",
    division: "Khulna",
    district: "Jashore",
    upazila: "Jashore Sadar",
    address: "Jashore Sadar",
    phone: "999",
    ambulance: "01714004003",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Jashore+General+Hospital"
},

{
    name: "Satkhira General Hospital",
    division: "Khulna",
    district: "Satkhira",
    upazila: "Satkhira Sadar",
    address: "Satkhira Sadar",
    phone: "999",
    ambulance: "01714004004",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Satkhira+General+Hospital"
},

{
    name: "Bagerhat District Hospital",
    division: "Khulna",
    district: "Bagerhat",
    upazila: "Bagerhat Sadar",
    address: "Bagerhat Sadar",
    phone: "999",
    ambulance: "01714004005",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Bagerhat+District+Hospital"
},
/* ==========================================
        KHULNA DIVISION (PART-2)
========================================== */

{
    name: "Kushtia General Hospital",
    division: "Khulna",
    district: "Kushtia",
    upazila: "Kushtia Sadar",
    address: "Kushtia Sadar, Kushtia",
    phone: "999",
    ambulance: "01714004006",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Kushtia+General+Hospital"
},

{
    name: "Chuadanga District Hospital",
    division: "Khulna",
    district: "Chuadanga",
    upazila: "Chuadanga Sadar",
    address: "Chuadanga Sadar",
    phone: "999",
    ambulance: "01714004007",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Chuadanga+District+Hospital"
},

{
    name: "Meherpur General Hospital",
    division: "Khulna",
    district: "Meherpur",
    upazila: "Meherpur Sadar",
    address: "Meherpur Sadar",
    phone: "999",
    ambulance: "01714004008",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Meherpur+General+Hospital"
},

{
    name: "Jhenaidah District Hospital",
    division: "Khulna",
    district: "Jhenaidah",
    upazila: "Jhenaidah Sadar",
    address: "Jhenaidah Sadar",
    phone: "999",
    ambulance: "01714004009",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Jhenaidah+District+Hospital"
},

{
    name: "Magura 250 Bed Hospital",
    division: "Khulna",
    district: "Magura",
    upazila: "Magura Sadar",
    address: "Magura Sadar",
    phone: "999",
    ambulance: "01714004010",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Magura+250+Bed+Hospital"
},

{
    name: "Narail Sadar Hospital",
    division: "Khulna",
    district: "Narail",
    upazila: "Narail Sadar",
    address: "Narail Sadar",
    phone: "999",
    ambulance: "01714004011",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Narail+Sadar+Hospital"
},

/* ==========================================
        BARISHAL DIVISION
========================================== */

{
    name: "Sher-e-Bangla Medical College Hospital",
    division: "Barishal",
    district: "Barishal",
    upazila: "Barishal Sadar",
    address: "Band Road, Barishal",
    phone: "999",
    ambulance: "01714005001",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "1000+",
    website: "",
    map: "https://maps.google.com/?q=Sher-e-Bangla+Medical+College+Hospital"
},

{
    name: "Barishal General Hospital",
    division: "Barishal",
    district: "Barishal",
    upazila: "Barishal Sadar",
    address: "Barishal Sadar",
    phone: "999",
    ambulance: "01714005002",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Barishal+General+Hospital"
},

{
    name: "Patuakhali General Hospital",
    division: "Barishal",
    district: "Patuakhali",
    upazila: "Patuakhali Sadar",
    address: "Patuakhali Sadar",
    phone: "999",
    ambulance: "01714005003",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Patuakhali+General+Hospital"
},

{
    name: "Bhola District Hospital",
    division: "Barishal",
    district: "Bhola",
    upazila: "Bhola Sadar",
    address: "Bhola Sadar",
    phone: "999",
    ambulance: "01714005004",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Bhola+District+Hospital"
},

{
    name: "Jhalokathi District Hospital",
    division: "Barishal",
    district: "Jhalokathi",
    upazila: "Jhalokathi Sadar",
    address: "Jhalokathi Sadar",
    phone: "999",
    ambulance: "01714005005",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Jhalokathi+District+Hospital"
},
/* ==========================================
        BARISHAL DIVISION (PART-2)
========================================== */

{
    name: "Pirojpur District Hospital",
    division: "Barishal",
    district: "Pirojpur",
    upazila: "Pirojpur Sadar",
    address: "Pirojpur Sadar, Pirojpur",
    phone: "999",
    ambulance: "01714005006",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Pirojpur+District+Hospital"
},

{
    name: "Barguna District Hospital",
    division: "Barishal",
    district: "Barguna",
    upazila: "Barguna Sadar",
    address: "Barguna Sadar",
    phone: "999",
    ambulance: "01714005007",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Barguna+District+Hospital"
},

/* ==========================================
        SYLHET DIVISION
========================================== */

{
    name: "MAG Osmani Medical College Hospital",
    division: "Sylhet",
    district: "Sylhet",
    upazila: "Sylhet Sadar",
    address: "Medical Road, Sylhet",
    phone: "999",
    ambulance: "01714006001",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "1000+",
    website: "",
    map: "https://maps.google.com/?q=MAG+Osmani+Medical+College+Hospital"
},

{
    name: "Sylhet District Hospital",
    division: "Sylhet",
    district: "Sylhet",
    upazila: "Sylhet Sadar",
    address: "Sylhet Sadar",
    phone: "999",
    ambulance: "01714006002",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Sylhet+District+Hospital"
},

{
    name: "Jalalabad Ragib-Rabeya Medical College Hospital",
    division: "Sylhet",
    district: "Sylhet",
    upazila: "South Surma",
    address: "South Surma, Sylhet",
    phone: "0821-720000",
    ambulance: "01714006003",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★★",
    beds: "500+",
    website: "",
    map: "https://maps.google.com/?q=Jalalabad+Ragib+Rabeya+Medical+College+Hospital"
},

{
    name: "Moulvibazar District Hospital",
    division: "Sylhet",
    district: "Moulvibazar",
    upazila: "Moulvibazar Sadar",
    address: "Moulvibazar Sadar",
    phone: "999",
    ambulance: "01714006004",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Moulvibazar+District+Hospital"
},

{
    name: "Habiganj District Hospital",
    division: "Sylhet",
    district: "Habiganj",
    upazila: "Habiganj Sadar",
    address: "Habiganj Sadar",
    phone: "999",
    ambulance: "01714006005",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Habiganj+District+Hospital"
},

{
    name: "Sunamganj District Hospital",
    division: "Sylhet",
    district: "Sunamganj",
    upazila: "Sunamganj Sadar",
    address: "Sunamganj Sadar",
    phone: "999",
    ambulance: "01714006006",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Sunamganj+District+Hospital"
},
/* ==========================================
        RANGPUR DIVISION
========================================== */

{
    name: "Rangpur Medical College Hospital",
    division: "Rangpur",
    district: "Rangpur",
    upazila: "Rangpur Sadar",
    address: "Medical East Gate Road, Rangpur",
    phone: "999",
    ambulance: "01714007001",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "1000+",
    website: "",
    map: "https://maps.google.com/?q=Rangpur+Medical+College+Hospital"
},

{
    name: "Rangpur General Hospital",
    division: "Rangpur",
    district: "Rangpur",
    upazila: "Rangpur Sadar",
    address: "Jail Road, Dhap, Rangpur",
    phone: "999",
    ambulance: "01714007002",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Rangpur+General+Hospital"
},

{
    name: "Dinajpur Medical College Hospital",
    division: "Rangpur",
    district: "Dinajpur",
    upazila: "Dinajpur Sadar",
    address: "Dinajpur Sadar",
    phone: "999",
    ambulance: "01714007003",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "500+",
    website: "",
    map: "https://maps.google.com/?q=Dinajpur+Medical+College+Hospital"
},

{
    name: "Gaibandha General Hospital",
    division: "Rangpur",
    district: "Gaibandha",
    upazila: "Gaibandha Sadar",
    address: "Gaibandha Sadar",
    phone: "999",
    ambulance: "01714007004",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Gaibandha+General+Hospital"
},

{
    name: "Kurigram General Hospital",
    division: "Rangpur",
    district: "Kurigram",
    upazila: "Kurigram Sadar",
    address: "Kurigram Sadar",
    phone: "999",
    ambulance: "01714007005",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Kurigram+General+Hospital"
},

{
    name: "Lalmonirhat District Hospital",
    division: "Rangpur",
    district: "Lalmonirhat",
    upazila: "Lalmonirhat Sadar",
    address: "Lalmonirhat Sadar",
    phone: "999",
    ambulance: "01714007006",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Lalmonirhat+District+Hospital"
},

{
    name: "Nilphamari General Hospital",
    division: "Rangpur",
    district: "Nilphamari",
    upazila: "Nilphamari Sadar",
    address: "Nilphamari Sadar",
    phone: "999",
    ambulance: "01714007007",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Nilphamari+General+Hospital"
},

{
    name: "Panchagarh District Hospital",
    division: "Rangpur",
    district: "Panchagarh",
    upazila: "Panchagarh Sadar",
    address: "Panchagarh Sadar",
    phone: "999",
    ambulance: "01714007008",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Panchagarh+District+Hospital"
},

{
    name: "Thakurgaon District Hospital",
    division: "Rangpur",
    district: "Thakurgaon",
    upazila: "Thakurgaon Sadar",
    address: "Thakurgaon Sadar",
    phone: "999",
    ambulance: "01714007009",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Thakurgaon+District+Hospital"
},
/* ==========================================
        MYMENSINGH DIVISION
========================================== */

{
    name: "Mymensingh Medical College Hospital",
    division: "Mymensingh",
    district: "Mymensingh",
    upazila: "Mymensingh Sadar",
    address: "Charpara, Mymensingh",
    phone: "999",
    ambulance: "01714008001",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★★",
    beds: "1000+",
    website: "",
    map: "https://maps.google.com/?q=Mymensingh+Medical+College+Hospital"
},

{
    name: "Sodesh Hospital",
    division: "Mymensingh",
    district: "Mymensingh",
    upazila: "Mymensingh Sadar",
    address: "298/2, Maskanda, Mymensingh",
    phone: "01734927758",
    ambulance: "01734927758",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★☆",
    beds: "150+",
    website: "",
    map: "https://maps.google.com/?q=Sodesh+Hospital+Mymensingh"
},

{
    name: "Central Hospital",
    division: "Mymensingh",
    district: "Mymensingh",
    upazila: "Mymensingh Sadar",
    address: "Maskanda, Mymensingh",
    phone: "01711611090",
    ambulance: "01711611090",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★☆",
    beds: "120+",
    website: "",
    map: "https://maps.google.com/?q=Central+Hospital+Mymensingh"
},

{
    name: "Jamuna Hospital",
    division: "Mymensingh",
    district: "Mymensingh",
    upazila: "Mymensingh Sadar",
    address: "Vatikashor, Mymensingh",
    phone: "01716198552",
    ambulance: "01716198552",
    emergency: "24 Hours",
    type: "Private",
    rating: "★★★★☆",
    beds: "100+",
    website: "",
    map: "https://maps.google.com/?q=Jamuna+Hospital+Mymensingh"
},

{
    name: "Jamalpur General Hospital",
    division: "Mymensingh",
    district: "Jamalpur",
    upazila: "Jamalpur Sadar",
    address: "Jamalpur Sadar",
    phone: "999",
    ambulance: "01714008002",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Jamalpur+General+Hospital"
},

{
    name: "Sherpur District Hospital",
    division: "Mymensingh",
    district: "Sherpur",
    upazila: "Sherpur Sadar",
    address: "Sherpur Sadar",
    phone: "999",
    ambulance: "01714008003",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Sherpur+District+Hospital"
},

{
    name: "Netrokona District Hospital",
    division: "Mymensingh",
    district: "Netrokona",
    upazila: "Netrokona Sadar",
    address: "Netrokona Sadar",
    phone: "999",
    ambulance: "01714008004",
    emergency: "24 Hours",
    type: "Government",
    rating: "★★★★☆",
    beds: "250+",
    website: "",
    map: "https://maps.google.com/?q=Netrokona+District+Hospital"
}

];