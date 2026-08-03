const aboutData = {

    mission: {

        title: "Our Mission",

        text: "Our mission is to provide a fast, reliable and intelligent emergency response platform for every citizen in Bangladesh."

    },

    vision: {

        title: "Our Vision",

        text: "Our vision is to connect hospitals, ambulance, police and fire service into one smart emergency ecosystem."

    },

    ai: {

        title: "AI Recommendation",

        text: "Artificial Intelligence analyzes emergency information and helps identify priority for faster response."

    },

    future: {

        title: "Future Goal",

        text: "SafeBangla will integrate live GPS tracking, mobile apps, nationwide emergency services and smart analytics."

    }

};


const tabs = document.querySelectorAll(".aboutTab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => {

            btn.classList.remove("bg-red-600","text-white");

            btn.classList.add("bg-white","border");

        });

        tab.classList.add("bg-red-600","text-white");

        const item = aboutData[tab.dataset.tab];

        document.getElementById("aboutTitle").innerText = item.title;

        document.getElementById("aboutText").innerText = item.text;

    });

});


const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }

                else {

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const currentContent = button.nextElementSibling;
        const currentIcon = button.querySelector("i");

        document.querySelectorAll(".faq-content").forEach(content => {

            if (content !== currentContent) {

                content.classList.add("hidden");

            }

        });

        document.querySelectorAll(".faq-btn i").forEach(icon => {

            if (icon !== currentIcon) {

                icon.classList.remove("fa-minus", "rotate-180");
                icon.classList.add("fa-plus");

            }

        });

        currentContent.classList.toggle("hidden");

        if (currentContent.classList.contains("hidden")) {

            currentIcon.classList.remove("fa-minus", "rotate-180");
            currentIcon.classList.add("fa-plus");

        } else {

            currentIcon.classList.remove("fa-plus");
            currentIcon.classList.add("fa-minus", "rotate-180");

        }

    });

});

const track = document.getElementById("testimonialTrack");

const slides = document.querySelectorAll("#testimonialTrack > div");

let currentSlide = 0;

function showSlide(index){

    track.style.transform = `translateX(-${index*100}%)`;

}

document.getElementById("nextSlide").onclick=()=>{

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

};

document.getElementById("prevSlide").onclick=()=>{

    currentSlide--;

    if(currentSlide<0){

        currentSlide=slides.length-1;

    }

    showSlide(currentSlide);

};

setInterval(()=>{

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

},4000);