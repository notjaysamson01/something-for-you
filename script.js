const button = document.querySelector(".survey-button");
const modal = document.getElementById("survey-modal");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-button");
const secretParagraph = document.getElementById("secret-paragraph");
const music = document.getElementById("bg-music");
const specialMessage = "Just making sure it was you :)";

const nameMessages = {
  jha: specialMessage,
  jhazmine: specialMessage,
  "jhazmine claire": specialMessage,
  "jhazmine claire pantalla": specialMessage,
};

button.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const nameInput = document
      .getElementById("name")
      .value.trim()
      .toLowerCase();

    alert(nameMessages[nameInput] || "Wag ka papansin teh para kay ano to eh");

    if (nameMessages[nameInput]) {
    secretParagraph.style.display = "block";
    secretParagraph.classList.add("active");

    music.currentTime = 0;
    music.volume = 0.5;
    music.play();
    }


    setTimeout(() => {
      modal.classList.remove("show");
    }, 300);
  });
}

function typeWriter(element, text, speed = 50) {
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

submitBtn.addEventListener("click", () => {
  const nameInput = document
    .getElementById("name")
    .value
    .trim()
    .toLowerCase();

  if (nameMessages[nameInput]) {
    secretParagraph.style.display = "inline-block";
    typeWriter(secretParagraph, secretParagraph.dataset.text, 60);
  }
});