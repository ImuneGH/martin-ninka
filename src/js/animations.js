import gsap from "gsap";

// functions

function showAnswer(e) {
  const answer = e.target.nextElementSibling;
  let isOpen = answer.classList.contains("is-open");
  answer.classList.toggle("is-open");
  console.log(isOpen);
  if (!isOpen) {
    gsap.to(answer, { opacity: 1, duration: 0.3, height: "auto", padding: 16, border: "1px solid var(--accent-color-hover)" });
  } else {
    gsap.to(answer, { opacity: 0, height: 0, duration: 0.3, padding: 0, border: "0px solid var(--accent-color-hover)" });
  }
}

// main code

// faq animations

const questionElements = document.querySelectorAll(".question");

questionElements.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
