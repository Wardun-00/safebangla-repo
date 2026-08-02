/* ==========================================
        CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactFormData");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name=document.getElementById("contactName").value.trim();

        const phone=document.getElementById("contactPhone").value.trim();

        const email=document.getElementById("contactEmail").value.trim();

        const subject=document.getElementById("contactSubject").value.trim();

        const message=document.getElementById("contactMessage").value.trim();

        if(name=="" || phone=="" || email=="" || subject=="" || message==""){

            alert("Please fill in all fields.");

            return;

        }

        if(!/^01[3-9]\d{8}$/.test(phone)){

            alert("Please enter a valid Bangladeshi mobile number.");

            return;

        }

        alert("✅ Your message has been sent successfully!");

        contactForm.reset();

    });

}

/* ==========================================
            FAQ
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const button = item.querySelector(".faq-btn");

    button.addEventListener("click",()=>{

        faqItems.forEach(i=>{

            if(i!==item){

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});