// functions

function showAnswer(e) {
  const answer = e.target.nextElementSibling;
  answer.classList.toggle("display-none");
}

// main code

const questionElements = document.querySelectorAll(".question");

questionElements.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
