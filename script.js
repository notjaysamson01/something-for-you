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
    riyann: specialMessage,
    jerold: specialMessage
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

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});


/* =========================================
   TYPEWRITER EFFECT
========================================= */

function typeWriter(element, text, speed = 60) {

    element.innerHTML = "";

    // Split the confession wherever there is a blank line
    const paragraphs = text.split(/\n\s*\n/);

    let paragraphIndex = 0;
    let characterIndex = 0;

    function typeCharacter() {

        // Finished typing everything
        if (paragraphIndex >= paragraphs.length) {
            return;
        }

        // Create the current paragraph if it doesn't exist
        let paragraph = element.lastElementChild;

        if (
            !paragraph ||
            paragraph.dataset.paragraph !== String(paragraphIndex)
        ) {
            paragraph = document.createElement("p");
            paragraph.dataset.paragraph = paragraphIndex;
            element.appendChild(paragraph);
        }

        const currentText = paragraphs[paragraphIndex];

        if (characterIndex < currentText.length) {

            paragraph.textContent += currentText.charAt(characterIndex);

            characterIndex++;

            // Automatically scroll to keep the newly typed text visible
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth"
            });

            setTimeout(typeCharacter, speed);

        } else {

            // Finished this paragraph
            paragraphIndex++;
            characterIndex = 0;

            // Scroll again when starting the next paragraph
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth"
            });

            // Small pause before starting the next paragraph
            setTimeout(typeCharacter, speed);
        }
    }

    typeCharacter();
}


/* =========================================
   SUBMIT
========================================= */

submitBtn.addEventListener("click", () => {

    const name = nameInput.value.trim().toLowerCase();

    alert(
        nameMessages[name] ||
        "bawal to sayo blee hihihi :P"
    );

    if (nameMessages[name]) {
        
        alert("sobrang haba ng nagawa ko hihihi");

        alert("Are you ready?");

        secretParagraph.style.display = "inline-block";

        secretParagraph.classList.add("active");

        typeWriter(
            secretParagraph,
            secretParagraph.dataset.text,
            60
        );

        music.currentTime = 0;
        music.volume = 1;

        music.play().catch(() => {
        });

        setTimeout(() => {
            modal.classList.remove("show");
        }, 300);
    }

});