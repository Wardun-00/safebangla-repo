/* ==========================================
        CITIZEN COMPLAINT
========================================== */

const complaintCards = document.querySelectorAll(".complaint-card");

const complaintForm = document.getElementById("complaintForm");

const formTitle = document.getElementById("formTitle");

const formSubtitle = document.getElementById("formSubtitle");

const problemDescription = document.getElementById("problemDescription");

if (
    complaintCards.length &&
    complaintForm &&
    formTitle &&
    formSubtitle &&
    problemDescription
) {

    complaintCards.forEach(card => {

        card.addEventListener("click", () => {

            // Remove Active Class

            complaintCards.forEach(item => {

                item.classList.remove(
                    "border-green-600",
                    "bg-green-50",
                    "scale-105",
                    "shadow-xl"
                );

            });

            // Active Card

            card.classList.add(
                "border-green-600",
                "bg-green-50",
                "scale-105",
                "shadow-xl"
            );

            // Show Form

            complaintForm.classList.remove("hidden");

            // Dynamic Text

            formTitle.textContent =
                card.dataset.title;

            formSubtitle.textContent =
                card.dataset.desc;

            problemDescription.placeholder =
                card.dataset.placeholder;

            // Smooth Scroll

            complaintForm.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}