import gsap from "gsap";

// functions

function showAnswer(e) {
  const answer = e.target.nextElementSibling;
  if (!isOpen) {
    isOpen = true;
    gsap.to(answer, { opacity: 1, duration: 0.5, height: "auto", padding: 16, border: "1px solid var(--accent-color-hover)" });
  } else {
    isOpen = false;
    gsap.to(answer, { opacity: 0, height: 0, duration: 0.5, padding: 0, border: "0px solid var(--accent-color-hover)" });
  }
}

// main code

// faq animations

let isOpen = false;
const questionElements = document.querySelectorAll(".question");

questionElements.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
