/* =========================================
   ELEMENTS
========================================= */

const button = document.querySelector(".survey-button");
const modal = document.getElementById("survey-modal");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-button");

const nameInput = document.getElementById("name");
const secretParagraph = document.getElementById("secret-paragraph");
const music = document.getElementById("bg-music");


/* =========================================
   MESSAGES
========================================= */

const specialMessage = "Just making sure it was you :)";

const nameMessages = {
    jha: specialMessage,
    jhaz: specialMessage,
    jhazmine: specialMessage,
    "jhazmine claire": specialMessage,
    "jhazmine claire pantalla": specialMessage,
    riyann: specialMessage
};


/* =========================================
   OPEN MODAL
========================================= */

button.addEventListener("click", () => {
    modal.classList.add("show");
});


/* =========================================
   CLOSE MODAL
========================================= */

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});


/* Close when clicking outside the modal */

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});


/* =========================================
   TYPEWRITER EFFECT
========================================= */

function typeWriter(element, text, speed = 60) {

    element.textContent = "";

    let i = 0;

    const interval = setInterval(() => {

        element.textContent += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(interval);
        }

    }, speed);
}


/* =========================================
   SUBMIT
========================================= */

submitBtn.addEventListener("click", () => {

    const name = nameInput.value.trim().toLowerCase();

    /* Check the entered name */

    alert(
        nameMessages[name] ||
        "bawal to sayo blee hihihi :P"
    );


    /* If the name is correct */

    if (nameMessages[name]) {

        /* Second alert */
        alert("Are you ready?");


        /* Show secret message */
        secretParagraph.style.display = "inline-block";

        secretParagraph.classList.add("active");


        /* Start typewriter */
        typeWriter(
            secretParagraph,
            secretParagraph.dataset.text,
            60
        );


        /* Start music */

        music.currentTime = 0;
        music.volume = 0.5;

        music.play().catch(() => {
            /*
                Some browsers may block autoplay/audio
                until the user interacts with the page.
            */
        });


        /* Close modal */

        setTimeout(() => {
            modal.classList.remove("show");
        }, 300);
    }

});
