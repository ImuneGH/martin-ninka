import gsap from "gsap";

// functions

function showAnswer(e) {
  const answer = e.target.nextElementSibling;
  if (answer.classList.contains("display-none")) {
    gsap.to(answer, { y: 0, opacity: 1, height: 70, duration: 0.5 });
    answer.classList.remove("display-none");
  } else {
    gsap.to(answer, { y: -30, opacity: 0, height: 0, duration: 0.5, onComplete: () => answer.classList.add("display-none") });
  }
}

// main code

// faq animations

const questionElements = document.querySelectorAll(".question");

questionElements.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
