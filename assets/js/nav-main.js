
    // ---------- Language dictionary ----------
    const dict = {
        en: {
            logo:"SafeBangla", subtitle:"Smart Emergency Response Platform",
            hotline:"National Emergency Hotline: 999",
            home:"Home", emergency:"Emergency", hospital:"Hospitals",
            dashboard:"Dashboard", about:"About", contact:"Contact", request:"Request Help",
            mega_e_h1:"Immediate Help", mega_e_h2:"Safety & Rescue",
            mega_e_1:"Ambulance Request", mega_e_1d:"Nearest available unit",
            mega_e_2:"Fire Service", mega_e_2d:"Report fire incidents",
            mega_e_3:"Police Assistance", mega_e_3d:"Nearby station contact",
            mega_e_4:"Disaster Response", mega_e_4d:"Flood, cyclone alerts",
            mega_e_cta_t:"Need help right now?",
            mega_e_cta_d:"Send your live location instantly to the nearest responder.",
            mega_h_h1:"Browse By", mega_h_1:"Nearby Hospitals",
            mega_h_2:"ICU / Bed Availability", mega_h_3:"Blood Bank",
            mega_h_h2:"Popular Cities",
            mega_h_c1:"Dhaka", mega_h_c2:"Chattogram", mega_h_c3:"Khulna", mega_h_c4:"Rajshahi"
        },
        bn: {
            logo:"সেফবাংলা", subtitle:"স্মার্ট জরুরি সেবা প্ল্যাটফর্ম",
            hotline:"জাতীয় জরুরি সেবা হটলাইন: ৯৯৯",
            home:"হোম", emergency:"জরুরি সেবা", hospital:"হাসপাতাল",
            dashboard:"ড্যাশবোর্ড", about:"আমাদের সম্পর্কে", contact:"যোগাযোগ", request:"সাহায্য চান",
            mega_e_h1:"তাৎক্ষণিক সহায়তা", mega_e_h2:"নিরাপত্তা ও উদ্ধার",
            mega_e_1:"অ্যাম্বুলেন্স অনুরোধ", mega_e_1d:"নিকটস্থ উপলব্ধ ইউনিট",
            mega_e_2:"ফায়ার সার্ভিস", mega_e_2d:"অগ্নিকাণ্ডের রিপোর্ট করুন",
            mega_e_3:"পুলিশ সহায়তা", mega_e_3d:"নিকটস্থ থানার যোগাযোগ",
            mega_e_4:"দুর্যোগ সাড়াদান", mega_e_4d:"বন্যা, ঘূর্ণিঝড় সতর্কতা",
            mega_e_cta_t:"এখনই সাহায্য দরকার?",
            mega_e_cta_d:"নিকটস্থ উদ্ধারকারীকে সাথে সাথে আপনার লাইভ লোকেশন পাঠান।",
            mega_h_h1:"ব্রাউজ করুন", mega_h_1:"নিকটস্থ হাসপাতাল",
            mega_h_2:"আইসিইউ / বেড খালি আছে কিনা", mega_h_3:"রক্তের ব্যাংক",
            mega_h_h2:"জনপ্রিয় শহর",
            mega_h_c1:"ঢাকা", mega_h_c2:"চট্টগ্রাম", mega_h_c3:"খুলনা", mega_h_c4:"রাজশাহী"
        }
    };

    let currentLang = "en";

    function applyLang(lang){
        currentLang = lang;
        document.body.setAttribute("lang-target", lang);
        document.querySelectorAll(".lang").forEach(el=>{
            const key = el.getAttribute("data-key");
            if(dict[lang][key]) el.textContent = dict[lang][key];
        });
        const shownText = lang === "en" ? "বাংলা" : "English";
        document.getElementById("languageText").textContent = shownText;
        document.getElementById("languageTextMobile").textContent = shownText;
        updateDateTime();
    }

    function toggleLang(){ applyLang(currentLang === "en" ? "bn" : "en"); }
    document.getElementById("languageBtn").addEventListener("click", toggleLang);
    document.getElementById("languageBtnMobile").addEventListener("click", toggleLang);




    // ---------- Mobile drawer ----------
    const menuBtn = document.getElementById("menuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");

    function openDrawer(){
        mobileMenu.classList.add("open");
        overlay.classList.add("show");
        document.body.style.overflow = "hidden";
    }
    function closeDrawer(){
        mobileMenu.classList.remove("open");
        overlay.classList.remove("show");
        document.body.style.overflow = "";
    }
    menuBtn.addEventListener("click", openDrawer);
    closeMenuBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);
    window.addEventListener("keydown", e=>{ if(e.key === "Escape") closeDrawer(); });

    // ---------- Mobile accordion ----------
    document.querySelectorAll(".acc-btn").forEach(btn=>{
        btn.addEventListener("click", ()=>{
            const content = btn.nextElementSibling;
            const icon = btn.querySelector(".acc-icon");
            const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

            document.querySelectorAll(".accordion-content").forEach(c=>{ c.style.maxHeight = null; });
            document.querySelectorAll(".acc-icon").forEach(i=>{ i.classList.remove("rotate-180"); });

            if(!isOpen){
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.add("rotate-180");
            }
        });
    });

    // ---------- Scroll behavior: shrink navbar + collapse hotline strip ----------
    const navbar = document.getElementById("navbar");
    const utilityBar = document.getElementById("utilityBar");
    let lastScroll = 0;
    window.addEventListener("scroll", ()=>{
        const y = window.scrollY;
        navbar.classList.toggle("scrolled", y > 10);
        utilityBar.classList.toggle("collapsed", y > 80);
        // adjust body padding to match collapsed bar
        document.body.style.paddingTop = y > 80 ? "72px" : "104px";
        lastScroll = y;
    });

    // ---------- Date & time ----------
    function updateDateTime(){
        const now = new Date();
        const dateOpts = { weekday:'short', year:'numeric', month:'short', day:'numeric' };
        const timeOpts = { hour:'2-digit', minute:'2-digit', second:'2-digit' };
        document.getElementById("currentDate").textContent = now.toLocaleDateString(currentLang === "bn" ? "bn-BD" : "en-US", dateOpts);
        document.getElementById("currentTime").textContent = now.toLocaleTimeString(currentLang === "bn" ? "bn-BD" : "en-US", timeOpts);
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);


 



    