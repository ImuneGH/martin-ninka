import gsap from "gsap";

// functions

function showAnswer(e) {
  const answer = e.target.nextElementSibling;
  const arrow = e.target.firstElementChild;
  let isOpen = answer.classList.contains("is-open");
  answer.classList.toggle("is-open");
  if (!isOpen) {
    gsap.to(answer, { opacity: 1, duration: 0.3, height: "auto", padding: 16, border: "1px solid var(--accent-color-hover)" });
    gsap.to(arrow, { rotate: 135, duration: 0.3 });
  } else {
    gsap.to(answer, { opacity: 0, height: 0, duration: 0.3, padding: 0, border: "0px solid var(--accent-color-hover)" });
    gsap.to(arrow, { rotate: -45, duration: 0.3 });
  }
}

// main code

// faq animations

const questionElements = document.querySelectorAll(".question");

questionElements.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
